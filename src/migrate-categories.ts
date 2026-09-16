import type { Payload } from "payload";

export const DEFAULT_CATEGORIES = [
  { title: "دیزل ژنراتور و موتور دیزلی", slug: "generators", order: 1 },
  { title: "پمپ دنده‌ای و غلیظ‌کش", slug: "gear", order: 2 },
  { title: "پمپ سانتریفیوژ و خودمکش", slug: "centrifugal", order: 3 },
  { title: "پمپ لجن‌کش و خودمکش", slug: "sludge-pumps", order: 4 },
  { title: "پمپ دنده‌ای پرتابل", slug: "gear-pumps", order: 5 },
  { title: "وت‌بلاست و آماده‌سازی سطح", slug: "other", order: 6 },
  { title: "پمپ پیستونی", slug: "piston", order: 7 },
  { title: "پمپ طبقاتی", slug: "multistage", order: 8 },
  { title: "خدمات ماشین‌کاری سنگین", slug: "machining", order: 9 },
];

export async function migrateProductCategories(payload?: Payload) {
  if (!payload) return;
  try {
    console.log("[Category Migration] در حال همگام‌سازی دسته‌بندی‌ها...");

    const categoryMap = new Map<string, string>();

    // ۱. اطمینان از وجود کلیه دسته‌بندی‌های استاندارد در product-categories
    for (const cat of DEFAULT_CATEGORIES) {
      try {
        const existing = await payload.find({
          collection: "product-categories",
          where: { slug: { equals: cat.slug } },
          limit: 1,
          depth: 0,
        });

        if (existing.docs.length > 0) {
          categoryMap.set(cat.slug, existing.docs[0].id);
        } else {
          const created = await payload.create({
            collection: "product-categories",
            data: {
              title: cat.title,
              slug: cat.slug,
              order: cat.order,
              isActive: true,
            },
          });
          categoryMap.set(cat.slug, created.id);
          console.log(`[Category Migration] دسته‌بندی ایجاد شد: ${cat.title} (${cat.slug})`);
        }
      } catch (err) {
        // ignore
      }
    }

    // ۲. بررسی محصولات و تبدیل اسلاگ‌های رشته‌ای به ObjectId معتبر در دیتابیس
    const allProducts = await payload.find({
      collection: "products",
      limit: 100,
      depth: 0,
    });

    for (const prod of allProducts.docs) {
      const catVal = prod.category;
      if (typeof catVal === "string" && !/^[0-9a-fA-F]{24}$/.test(catVal)) {
        let targetId = categoryMap.get(catVal);
        if (!targetId) {
          const cat = await payload.find({
            collection: "product-categories",
            where: { slug: { equals: catVal } },
            limit: 1,
            depth: 0,
          });
          if (cat.docs.length > 0) {
            targetId = cat.docs[0].id;
          } else {
            const newCat = await payload.create({
              collection: "product-categories",
              data: {
                title: catVal,
                slug: catVal,
                order: 99,
                isActive: true,
              },
            });
            targetId = newCat.id;
          }
          categoryMap.set(catVal, targetId);
        }

        console.log(`[Category Migration] بروزرسانی محصول «${prod.title}» به شناسه دسته: ${targetId}`);
        await payload.update({
          collection: "products",
          id: prod.id,
          data: {
            category: targetId,
          } as any,
        });
      }
    }
    console.log("[Category Migration] همگام‌سازی دسته‌بندی‌ها با موفقیت انجام شد.");
  } catch (err) {
    console.error("[Category Migration Error]:", err);
  }
}
