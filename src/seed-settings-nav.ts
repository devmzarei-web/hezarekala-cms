import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const DEFAULT_HEADER_NAV = [
  { label: "خانه", href: "/", isExternal: false },
  { label: "محصولات", href: "/products", isExternal: false },
  { label: "توانمندی‌ها", href: "/capabilities", isExternal: false },
  { label: "صنایع هدف", href: "/sectors", isExternal: false },
  { label: "پروژه‌ها", href: "/projects", isExternal: false },
  { label: "گالری", href: "/gallery", isExternal: false },
  { label: "درباره ما", href: "/about", isExternal: false },
  { label: "وبلاگ", href: "/blog", isExternal: false },
  { label: "تماس با ما", href: "/contact", isExternal: false },
];

export const DEFAULT_FOOTER_QUICK_LINKS = [
  { label: "محصولات", href: "/products" },
  { label: "توانمندی‌ها", href: "/capabilities" },
  { label: "پروژه‌ها", href: "/projects" },
  { label: "درباره ما", href: "/about" },
  { label: "وبلاگ", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
];

export const DEFAULT_FOOTER_PRODUCT_LINKS = [
  { label: "دیزل ژنراتور و موتور دیزلی", href: "/products?category=generators" },
  { label: "پمپ لجن‌کش و خودمکش", href: "/products?category=sludge-pumps" },
  { label: "پمپ دنده‌ای پرتابل", href: "/products?category=gear-pumps" },
  { label: "سامانه وت‌بلاست", href: "/products?category=wet-blast" },
  { label: "خدمات ماشین‌کاری سنگین", href: "/products?category=machining" },
];

export async function seedSettingsNav() {
  console.log("=== شروع بررسی و مقداردهی اولیه تنظیمات منو و ناوبری (Settings Nav) ===");
  const { getPayload } = await import("payload");
  const configModule = await import("./payload.config");
  const config = configModule.default;

  const payload = await getPayload({ config });

  try {
    const existingSettings = await payload.find({
      collection: "settings",
      limit: 1,
      depth: 0,
    });

    const updateData: Record<string, any> = {};

    if (existingSettings.docs.length === 0) {
      console.log("[جدید] ایجاد رکورد تنظیمات اولیه با منوها...");
      await payload.create({
        collection: "settings",
        data: {
          siteName: "هزاره کالا",
          headerNavItems: DEFAULT_HEADER_NAV,
          headerCtaText: "درخواست مشاوره",
          headerCtaLink: "/contact",
          footerQuickLinks: DEFAULT_FOOTER_QUICK_LINKS,
          footerProductLinks: DEFAULT_FOOTER_PRODUCT_LINKS,
        } as any,
      });
      console.log("✓ رکورد جدید تنظیمات با موفقیت ایجاد شد.");
    } else {
      const doc = existingSettings.docs[0];
      let needsUpdate = false;

      // 1. بررسی منوی هدر
      if (!doc.headerNavItems || doc.headerNavItems.length === 0) {
        console.log("[به‌روزرسانی] مقداردهی اولیه headerNavItems با ۹ لینک پیش‌فرض...");
        updateData.headerNavItems = DEFAULT_HEADER_NAV;
        needsUpdate = true;
      } else {
        console.log(`[موجود] منوی هدر از قبل با ${doc.headerNavItems.length} آیتم ثبت شده است (دست‌نخورده باقی ماند).`);
      }

      // 2. بررسی دکمه CTA هدر
      if (!doc.headerCtaText) {
        updateData.headerCtaText = "درخواست مشاوره";
        needsUpdate = true;
      }
      if (!doc.headerCtaLink) {
        updateData.headerCtaLink = "/contact";
        needsUpdate = true;
      }

      // 3. بررسی لینک‌های دسترسی سریع فوتر
      if (!doc.footerQuickLinks || doc.footerQuickLinks.length === 0) {
        console.log("[به‌روزرسانی] مقداردهی اولیه footerQuickLinks با لینک‌های پیش‌فرض...");
        updateData.footerQuickLinks = DEFAULT_FOOTER_QUICK_LINKS;
        needsUpdate = true;
      } else {
        console.log(`[موجود] لینک‌های دسترسی سریع فوتر از قبل دارای ${doc.footerQuickLinks.length} آیتم است.`);
      }

      // 4. بررسی لینک‌های محصولات فوتر
      if (!doc.footerProductLinks || doc.footerProductLinks.length === 0) {
        console.log("[به‌روزرسانی] مقداردهی اولیه footerProductLinks با دسته‌های تجهیزات...");
        updateData.footerProductLinks = DEFAULT_FOOTER_PRODUCT_LINKS;
        needsUpdate = true;
      } else {
        console.log(`[موجود] لینک‌های محصولات فوتر از قبل دارای ${doc.footerProductLinks.length} آیتم است.`);
      }

      if (needsUpdate) {
        await payload.update({
          collection: "settings",
          id: doc.id,
          data: updateData,
        });
        console.log("✓ رکورد تنظیمات با فیلدهای منو و CTA با موفقیت به‌روزرسانی شد.");
      } else {
        console.log("✓ تمامی فیلدهای منو و تنظیمات از قبل پر بودند. هیچ تغییری لازم نبود.");
      }
    }
  } catch (err: any) {
    console.error("خطا در همگام‌سازی تنظیمات منو:", err?.message || err);
    throw err;
  }

  console.log("=== پایان عملیات همگام‌سازی منوها ===");
}

if (process.argv[1] && process.argv[1].endsWith("seed-settings-nav.ts")) {
  seedSettingsNav()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("خطای اسکریپت seed-settings-nav:", err);
      process.exit(1);
    });
}
