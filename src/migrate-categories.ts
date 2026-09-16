import type { Payload } from "payload";
import mongoose from "mongoose";

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
  try {
    const db = mongoose.connection.db;
    if (!db) {
      console.log("[Category Migration] دیتابیس در دسترس نیست، مهاجرت رد شد.");
      return;
    }

    const categoriesColl = db.collection("product-categories");
    const productsColl = db.collection("products");

    // ۱. اطمینان از وجود دسته‌بندی‌های پیش‌فرض در product-categories
    for (const cat of DEFAULT_CATEGORIES) {
      const existing = await categoriesColl.findOne({ slug: cat.slug });
      if (!existing) {
        await categoriesColl.insertOne({
          title: cat.title,
          slug: cat.slug,
          order: cat.order,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        console.log(`[Category Migration] دسته‌بندی ایجاد شد: ${cat.title} (${cat.slug})`);
      }
    }

    // ۲. نقشه‌برداری اسلاگ دسته‌ها به ObjectId
    const allCategories = await categoriesColl.find({}).toArray();
    const categoryBySlug = new Map<string, any>();
    for (const cat of allCategories) {
      if (cat.slug) categoryBySlug.set(cat.slug, cat._id);
    }

    // ۳. بررسی و تبدیل فیلد category در محصولات به ObjectId معتبر
    const products = await productsColl.find({}).toArray();
    for (const prod of products) {
      if (!prod.category) continue;

      if (typeof prod.category === "string") {
        const isValidObjectId =
          mongoose.Types.ObjectId.isValid(prod.category) && prod.category.length === 24;

        if (!isValidObjectId) {
          // اگر اسلاگ متنی مثل 'other' یا 'gear' یا 'centrifugal' باشد
          let catId = categoryBySlug.get(prod.category);

          if (!catId) {
            // در صورتی که دسته جدیدی با این اسلاگ وجود نداشته باشد ایجاد می‌کنیم
            const newCat = await categoriesColl.insertOne({
              title: prod.category,
              slug: prod.category,
              order: 99,
              isActive: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            catId = newCat.insertedId;
            categoryBySlug.set(prod.category, catId);
          }

          await productsColl.updateOne(
            { _id: prod._id },
            { $set: { category: catId } }
          );
          console.log(
            `[Category Migration] دسته‌بندی محصول «${prod.title}» از رشته «${prod.category}» به ObjectId(${catId}) تبدیل شد.`
          );
        }
      }
    }
    console.log("[Category Migration] فرآیند همگام‌سازی و ارتقای دسته‌بندی‌ها با موفقیت انجام شد.");
  } catch (err) {
    console.error("[Category Migration Error]:", err);
  }
}
