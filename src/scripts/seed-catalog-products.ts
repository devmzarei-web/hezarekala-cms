import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import { CATALOG_PRODUCTS, ProductSeedItem } from "../data/catalog-products-data";
import { migrateProductCategories } from "../migrate-categories";

/* ── Lexical Rich-Text Helper ── */
function buildLexicalContent(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      format: "" as const,
      indent: 0,
      version: 1,
      children: paragraphs.map((text) => ({
        type: "paragraph",
        format: "" as const,
        indent: 0,
        version: 1,
        children: [
          {
            mode: "normal",
            text,
            type: "text",
            style: "",
            detail: 0,
            format: 0,
            version: 1,
          },
        ],
        direction: "rtl" as const,
      })),
      direction: "rtl" as const,
    },
  };
}

export interface SeedCatalogOptions {
  forceUpdate?: boolean;
  defaultActive?: boolean; // STRICT DEFAULT: false (Draft mode)
}

export interface SeedCatalogResult {
  success: boolean;
  message: string;
  results: {
    total: number;
    created: number;
    updated: number;
    skipped: number;
    draftsCount: number;
  };
  items: Array<{
    slug: string;
    title: string;
    action: "created" | "updated" | "skipped";
    isActive: boolean;
    supplyStatus: string;
  }>;
}

export async function runCatalogSeeding(options: SeedCatalogOptions = {}): Promise<SeedCatalogResult> {
  const { forceUpdate = true, defaultActive = false } = options;

  console.log("==================================================");
  console.log("🚀 شروع عملیات درج و همگام‌سازی تجهیزات کاتالوگ در Payload CMS");
  console.log(`🔒 وضعیت انتشار پیش‌فرض: ${defaultActive ? "فعال (منتشر)" : "غیرفعال (پیش‌نویس جهت بازبینی)"}`);
  console.log("==================================================");

  const { getPayload } = await import("payload");
  const configModule = await import("../payload.config");
  const config = configModule.default;
  const payload = await getPayload({ config });

  // ۱. اطمینان از همگام‌سازی دسته‌بندی‌ها
  await migrateProductCategories(payload);

  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;
  let draftsCount = 0;

  const itemsResult: SeedCatalogResult["items"] = [];

  for (const prod of CATALOG_PRODUCTS) {
    try {
      // دریافت شناسه دسته‌بندی
      let categoryId: string | undefined = undefined;
      if (prod.category) {
        const catDoc = await payload.find({
          collection: "product-categories",
          where: { slug: { equals: prod.category } },
          limit: 1,
          depth: 0,
        });
        categoryId = catDoc.docs[0]?.id;
      }

      // جستجوی محصول بر اساس اسلاگ
      const existing = await payload.find({
        collection: "products",
        where: { slug: { equals: prod.slug } },
        limit: 1,
        depth: 0,
      });

      const supplySpec = prod.specifications.find((s) => s.customLabel === "وضعیت تأمین و تحویل");
      const supplyStatus = supplySpec ? supplySpec.value : "ثبت شده در کاتالوگ";

      if (existing.docs.length > 0) {
        const existingDoc = existing.docs[0];

        if (forceUpdate) {
          // در به‌روزرسانی، تصاویر قبلی اگر وجود دارند حفظ می‌شوند
          // و همچنین پرچم isActive روی پیش‌نویس (false) می‌ماند مگر اینکه مدیر قبلاً آن را دستی فعال کرده باشد
          const keepActive = typeof existingDoc.isActive === "boolean" ? existingDoc.isActive : defaultActive;

          await payload.update({
            collection: "products",
            id: existingDoc.id,
            data: {
              title: prod.title,
              category: categoryId || existingDoc.category,
              shortDescription: prod.shortDescription,
              fullDescription: buildLexicalContent(prod.fullDescriptionParagraphs),
              metaTitle: prod.metaTitle,
              metaDescription: prod.metaDescription,
              order: prod.order,
              specifications: prod.specifications,
              // اگر وضعیت مشخصی در دیتابیس نبود از defaultActive (false) استفاده می‌کنیم
              isActive: keepActive,
            } as any,
          });

          updatedCount++;
          if (!keepActive) draftsCount++;

          console.log(`[به‌روزرسانی] محصول «${prod.title}» به‌روزرسانی شد. (وضعیت انتشار: ${keepActive ? "منتشر" : "پیش‌نویس"})`);
          itemsResult.push({
            slug: prod.slug,
            title: prod.title,
            action: "updated",
            isActive: keepActive,
            supplyStatus,
          });
        } else {
          skippedCount++;
          console.log(`[بدون تغییر] محصول «${prod.title}» نادیده گرفته شد.`);
          itemsResult.push({
            slug: prod.slug,
            title: prod.title,
            action: "skipped",
            isActive: Boolean(existingDoc.isActive),
            supplyStatus,
          });
        }
      } else {
        // ایجاد محصول جدید در حالت پیش‌نویس (isActive: false)
        await payload.create({
          collection: "products",
          data: {
            title: prod.title,
            slug: prod.slug,
            category: categoryId,
            shortDescription: prod.shortDescription,
            fullDescription: buildLexicalContent(prod.fullDescriptionParagraphs),
            metaTitle: prod.metaTitle,
            metaDescription: prod.metaDescription,
            isFeatured: prod.isFeatured,
            isActive: defaultActive, // همیشه پیش‌نویس (false)
            order: prod.order,
            specifications: prod.specifications,
          } as any,
        });

        createdCount++;
        draftsCount++;

        console.log(`[ایجاد جدید] محصول «${prod.title}» در حالت پیش‌نویس (غیرفعال) با موفقیت ثبت شد.`);
        itemsResult.push({
          slug: prod.slug,
          title: prod.title,
          action: "created",
          isActive: defaultActive,
          supplyStatus,
        });
      }
    } catch (err: any) {
      console.error(`❌ خطا در پردازش محصول ${prod.slug}:`, err?.message || err);
    }
  }

  console.log("==================================================");
  console.log(`✅ پایان عملیات. مجموع: ${CATALOG_PRODUCTS.length} | جدید: ${createdCount} | به‌روز: ${updatedCount} | پیش‌نویس‌ها: ${draftsCount}`);
  console.log("==================================================");

  return {
    success: true,
    message: "کلیه محصولات کاتالوگ با موفقیت بررسی و در وضعیت پیش‌نویس (جهت بازبینی ادمین) در Payload CMS ذخیره شدند.",
    results: {
      total: CATALOG_PRODUCTS.length,
      created: createdCount,
      updated: updatedCount,
      skipped: skippedCount,
      draftsCount,
    },
    items: itemsResult,
  };
}

// اجرای مستقیم از طریق خط فرمان: tsx src/scripts/seed-catalog-products.ts
if (process.argv[1] && process.argv[1].replace(/\\/g, "/").includes("seed-catalog-products.ts")) {
  runCatalogSeeding({ forceUpdate: true, defaultActive: false })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("خطای اسکریپت seed-catalog-products:", err);
      process.exit(1);
    });
}
