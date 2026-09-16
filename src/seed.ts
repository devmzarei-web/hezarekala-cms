import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

/* ── Lexical Rich-Text Builder Helper ── */
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

/* ── Industrial Products Seed Data ── */
export const PRODUCTS_TO_SEED = [
  {
    title: "دیزل ژنراتور صنعتی ۴۵ کاوا (45 KVA Diesel Generator)",
    slug: "diesel-generator-45kva",
    category: "generators",
    order: 0,
    shortDescription:
      "دیزل ژنراتور صنعتی ۴۵ کاوا (۳۶ کیلووات) مجهز به موتور دیزل چهارسیلندر آب‌خنک، آلترناتور سنکرون براشلس، کنترل‌کننده دیجیتال هوشمند و کانوپی سایلنت با عایق صوتی چندلایه.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور صنعتی ۴۵ کاوا (۳۶ کیلووات) طراحی‌شده توسط شرکت هزاره کالا دانش اروند، راهکاری مطمئن و با دوام برای تأمین برق اضطراری و دائم در کارگاه‌های صنعتی، پروژه‌های عمرانی، ایستگاه‌های پمپاژ، مراکز تجاری و تأسیسات زیربنایی است.",
      "این پکیج مجهز به موتور دیزل سنگین چهارسیلندر خطی آب‌خنک با رادیاتور مدار بسته گرمسیری، سیستم پاشش سوخت مستقیم و استهلاک بسیار پایین می‌باشد. آلترناتور دستگاه از نوع سنکرون براشلس با رگولاتور ولتاژ خودکار (AVR) با دقت تنظیم ولتاژ ۱± درصد و عایق‌بندی کلاس H است.",
      "کانوپی سایلنت دستگاه از ورق‌های فولادی با پوشش رنگ پودری الکترواستاتیک کوره‌ای و فوم‌های جاذب صوت ضدحریق ساخته شده که صدای خروجی را تا کمتر از ۷۰ دسی‌بل در فاصله ۷ متری کاهش می‌دهد. تابلو کنترل دیجیتال هوشمند مجهز به حفاظت‌های کامل فشار روغن، دمای آب، اضافه‌بار، فرکانس و باتری می‌باشد.",
    ],
    metaTitle: "دیزل ژنراتور ۴۵ کاوا | هزاره کالا دانش اروند",
    metaDescription:
      "مشخصات فنی و استعلام قیمت دیزل ژنراتور صنعتی ۴۵ KVA مجهز به موتور دیزل سنگین و کانوپی سایلنت ساخت هزاره کالا دانش اروند.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "kva", value: "45", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "36", unit: "kW", isNumeric: true },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "رادیاتور آب‌خنک صنعتی مدار بسته گرمسیری", isNumeric: false },
      { standardFeature: "engineModel", value: "موتور دیزل سنگین چهارسیلندر خطی", isNumeric: false },
      { standardFeature: "custom", customLabel: "فرکانس و ولتاژ نامی", value: "50 Hz / 400V - سه‌فاز", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع کانوپی", value: "کانوپی ماژولار سایلنت ضدباران و عایق صوت ضدحریق", isNumeric: false },
      { standardFeature: "casingMaterial", value: "شاسی فولادی صلب به همراه مخزن سوخت یکپارچه", isNumeric: false },
    ],
  },
  {
    title: "پکیج دیزل پمپ پرتابل ۴ اینچ مدل HKDA.DGP.4D.001",
    slug: "portable-diesel-gear-pump-hkda-4d001",
    category: "gear",
    order: 1,
    shortDescription:
      "پکیج پرتابل و مستقل از برق پمپ دنده‌ای صنعتی جابه‌جایی مثبت ۴ اینچ با کاور سایلنت، موتور دیزل و دبی ۴۲ مترمکعب در ساعت؛ طراحی‌شده برای انتقال فرآورده‌های نفتی، روغن‌های سنگین، سوخت، لجن هیدروکربنی و سیالات غلیظ در شرایط اضطراری.",
    fullDescriptionParagraphs: [
      "پکیج دیزل پمپ پرتابل مدل HKDA.DGP.4D.001 محصولی تخصصی برای انتقال سیالات ویسکوز و هیدروکربنی سنگین در پالایشگاه‌ها، پتروشیمی‌ها، اسکله‌های نفتی و خطوط لوله است.",
      "این سیستم کاملاً مستقل از شبکه برق بوده و با موتور دیزل صنعتی ۱۵ کیلووات مجهز به استارت الکتریکی و باتری مستقل راه‌اندازی می‌شود. پمپ دنده‌ای جابه‌جایی مثبت توانایی ایجاد فشار تا ۵ بار و پمپاژ سیالات با دمای کاری تا ۳۰۰ درجه سانتی‌گراد را داراست.",
      "کاور سایلنت با لایه‌های جاذب صوت استاندارد و شاسی فولادی پرتابل، امکان جابه‌جایی سریع و ایمن پکیج را در شرایط عملیاتی دشوار فراهم می‌کند.",
    ],
    metaTitle: "دیزل پمپ پرتابل ۴ اینچ مدل HKDA.DGP.4D.001 | هزاره کالا",
    metaDescription:
      "مشخصات فنی و استعلام قیمت پکیج دیزل پمپ دنده‌ای جابه‌جایی مثبت ۴ اینچ پرتابل مدل HKDA.DGP.4D.001 ساخت شرکت هزاره کالا دانش اروند.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "flowRate", value: "42", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "50", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "15", unit: "kW", isNumeric: true },
      { standardFeature: "speed", value: "700", unit: "RPM", isNumeric: true },
      { standardFeature: "maxTemp", value: "300", unit: "°C", isNumeric: true },
      { standardFeature: "weight", value: "90", unit: "kg", isNumeric: true },
      {
        standardFeature: "casingMaterial",
        value: "چدن صنعتی داکتیل (نسخه سفارشی: استنلس استیل 316L)",
        isNumeric: false,
      },
      { standardFeature: "shaftMaterial", value: "فولاد آلیاژی سخت‌کاری شده", isNumeric: false },
      { standardFeature: "sealType", value: "نخ پکینگ نسوز تفلونی", isNumeric: false },
      { standardFeature: "custom", customLabel: "سایز ورودی و خروجی", value: "4", unit: "inch", isNumeric: true },
      { standardFeature: "custom", customLabel: "محرک دستگاه", value: "موتور دیزل صنعتی مجهز به استارت الکتریکی و باتری", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع شاسی و کاور", value: "شاسی فولادی یکپارچه پرتابل با کاور سایلنت و لایه جاذب صوت", isNumeric: false },
    ],
  },
  {
    title: "پمپ خودمکش دیزلی تمام‌اتوماتیک ۴ اینچ مدل SP-4D-01",
    slug: "self-priming-diesel-pump-4inch",
    category: "centrifugal",
    order: 2,
    shortDescription:
      "پمپ خودمکش دیزلی پرتابل ۴ اینچ با دبی ۱۶۰ مترمکعب بر ساعت، عمق مکش ۹ متر، سامانه وکیوم کمکی و کنترلر سه‌مرحله‌ای؛ مناسب آبکشی، تخلیه آبگرفتگی‌ها و انتقال فاضلاب و سیالات حاوی لجن، شن و ماسه.",
    fullDescriptionParagraphs: [
      "پمپ خودمکش دیزلی مدل SP-4D-01 جهت پمپاژ آب‌های آلوده و پساب‌های حاوی شن و ماسه و لجن در پروژه‌های عمرانی، معدنی و مهار سیلاب طراحی شده است.",
      "این پمپ با استفاده از سیستم کمکی مکش وکیوم، توانایی هواگیری سریع و مکش از عمق ۹ متری بدون نیاز به پر کردن خط لوله مکش را دارا می‌باشد.",
      "پروانه نیمه‌باز ضدسایش از جنس چدن آلیاژی یا استیل امکان عبور ذرات جامد تا ابعاد ۴۵ میلی‌متر را بدون گرفتگی تضمین می‌نماید.",
    ],
    metaTitle: "پمپ خودمکش دیزلی ۴ اینچ SP-4D-01 | هزاره کالا",
    metaDescription:
      "پمپ خودمکش تمام‌اتوماتیک دیزلی ۴ اینچ با دبی ۱۶۰ مترمکعب بر ساعت و عبور جامدات تا ۴۵ میلی‌متر ساخت هزاره کالا.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "flowRate", value: "160", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "32", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "25", unit: "kW", isNumeric: true },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "custom", customLabel: "سایز ورودی و خروجی", value: "4", unit: "inch", isNumeric: true },
      { standardFeature: "custom", customLabel: "حداکثر عمق مکش", value: "9", unit: "m", isNumeric: true },
      { standardFeature: "custom", customLabel: "قابلیت عبور جامدات", value: "45", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "چدن صنعتی ضدسایش", isNumeric: false },
      { standardFeature: "impellerMaterial", value: "پروانه چشم‌باز ضدسایش", isNumeric: false },
      { standardFeature: "sealType", value: "سیل مکانیکال صنعتی مقاوم در برابر ذرات", isNumeric: false },
      { standardFeature: "custom", customLabel: "سامانه خودمکش", value: "وکیوم کمکی + کنترلر سه‌مرحله‌ای ضدورود لجن", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع شاسی", value: "شاسی چرخ‌دار یدک‌کش با جک‌های تراز", isNumeric: false },
    ],
  },
  {
    title: "پمپ خودمکش دیزلی تمام‌اتوماتیک ۶ اینچ مدل SP-6D-01",
    slug: "self-priming-diesel-pump-6inch",
    category: "centrifugal",
    order: 3,
    shortDescription:
      "پکیج خودمکش دیزلی ۶ اینچ با دبی ۳۲۰ مترمکعب بر ساعت، هد ۳۲ متر، سامانه وکیوم مایع‌رینگ ۱۰۰ CFM، موتور دیزل چهارسیلندر ۳۸ کیلووات و شاسی یدک‌کش؛ ایده‌آل برای آبگیری گودها، کانال‌ها و انتقال لجن در پروژه‌های عمرانی و پالایشگاهی.",
    fullDescriptionParagraphs: [
      "پمپ خودمکش دیزلی ۶ اینچ مدل SP-6D-01 با دبی ۳۲۰ مترمکعب در ساعت، گزینه‌ای قدرتمند برای آبگیری معادن، پروژه‌های فراساحلی و تخلیه حوضچه‌های تصفیه‌خانه‌هاست.",
      "موتور دیزل ۳۸ کیلووات چهارسیلندر آب‌خنک در ترکیب با پمپ وکیوم مایع‌رینگ ۱۰۰ CFM، مکش بسیار پایدار و بدون وقفه ایجاد می‌کند.",
      "پروانه ضدسایش گذردهی ذرات معلق تا قطر ۱۰۰ میلی‌متر را بدون کوچکترین انسداد فراهم می‌آورد.",
    ],
    metaTitle: "پمپ خودمکش دیزلی ۶ اینچ SP-6D-01 | هزاره کالا",
    metaDescription:
      "پمپ خودمکش دیزلی تمام‌اتوماتیک ۶ اینچ مدل SP-6D-01 با دبی ۳۲۰ مترمکعب بر ساعت و عبور جامدات تا ۱۰۰ میلی‌متر ساخت هزاره کالا.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "flowRate", value: "320", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "32", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "38", unit: "kW", isNumeric: true },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "custom", customLabel: "سایز ورودی و خروجی", value: "6", unit: "inch", isNumeric: true },
      { standardFeature: "custom", customLabel: "حداکثر عمق مکش", value: "9", unit: "m", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت وکیوم مکش هوا", value: "100", unit: "CFM", isNumeric: true },
      { standardFeature: "custom", customLabel: "قابلیت عبور جامدات", value: "100", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "حلزونی چدن داکتیل ضدسایش", isNumeric: false },
      { standardFeature: "impellerMaterial", value: "پروانه چشم‌باز مقاوم در برابر سایش", isNumeric: false },
      { standardFeature: "shaftMaterial", value: "استنلس استیل", isNumeric: false },
      { standardFeature: "sealType", value: "سیل مکانیکال تخصصی ذرات معلق", isNumeric: false },
      { standardFeature: "custom", customLabel: "موتور محرک", value: "دیزل ۴ سیلندر آب‌خنک ۳۸ کیلووات در ۱۵۰۰ RPM", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم مخزن سوخت", value: "80", unit: "L", isNumeric: true },
    ],
  },
  {
    title: "پمپ خودمکش دیزلی تمام‌اتوماتیک ۸ اینچ مدل SP-8D-01",
    slug: "self-priming-diesel-pump-8inch",
    category: "centrifugal",
    order: 4,
    shortDescription:
      "قدرتمندترین پمپ خودمکش دیزلی مجموعه با دبی ۶۰۰ مترمکعب در ساعت، موتور دیزل ۷۰ کیلووات ساخت موتورسازان تبریز، عبور جامدات تا ۱۰۰ میلی‌متر و شاسی فولادی تک‌محور با ترمز دستی؛ طراحی‌شده برای تخلیه حوضچه‌های آلوده و مهار سیلاب‌های بزرگ.",
    fullDescriptionParagraphs: [
      "پمپ خودمکش دیزلی سنگین ۸ اینچ مدل SP-8D-01 غول پمپاژ آب و لجن با خروجی فوق‌العاده ۶۰۰ مترمکعب در ساعت است.",
      "مجهز به موتور دیزل قدرتمند ۷۰ کیلووات ساخت موتورسازان تبریز مدل 40/40، رادیاتور تقویت‌شده و سیستم کنترل الکترونیکی دور موتور جهت بهینه‌سازی مصرف سوخت.",
      "طراحی حلزونی و پروانه برای مقاومت طولانی‌مدت در برابر فرسایش ناشی از ماسه، گل و لای و سیالات خورنده بهینه‌سازی شده است.",
    ],
    metaTitle: "پمپ خودمکش دیزلی ۸ اینچ SP-8D-01 | هزاره کالا",
    metaDescription:
      "پمپ خودمکش دیزلی سنگین ۸ اینچ مدل SP-8D-01 با دبی ۶۰۰ مترمکعب بر ساعت و موتور ۷۰ کیلووات ساخت هزاره کالا دانش اروند.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "flowRate", value: "600", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "32", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "70", unit: "kW", isNumeric: true },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "custom", customLabel: "سایز ورودی و خروجی", value: "8", unit: "inch", isNumeric: true },
      { standardFeature: "custom", customLabel: "حداکثر عمق مکش", value: "9", unit: "m", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت وکیوم مکش هوا", value: "100", unit: "CFM", isNumeric: true },
      { standardFeature: "custom", customLabel: "قابلیت عبور جامدات", value: "100", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "حلزونی چدن آلیاژی ضدسایش", isNumeric: false },
      { standardFeature: "impellerMaterial", value: "پروانه چشم‌باز ضدسایش با گذردهی بالا", isNumeric: false },
      { standardFeature: "shaftMaterial", value: "استنلس استیل مقاوم در برابر خوردگی", isNumeric: false },
      { standardFeature: "sealType", value: "سیل مکانیکال سخت‌کاری شده کاربید تنگستن", isNumeric: false },
      { standardFeature: "custom", customLabel: "موتور محرک", value: "دیزل آب‌خنک موتورسازان تبریز مدل 40/40، توان ۷۰ kW", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم مخزن سوخت", value: "80", unit: "L", isNumeric: true },
    ],
  },
  {
    title: "دستگاه وت‌بلاست و آماده‌سازی سطح پرتابل",
    slug: "portable-wet-blast-unit",
    category: "other",
    order: 5,
    shortDescription:
      "سامانه سندبلاست مرطوب (وت‌بلاست) پرتابل جهت رسوب‌زدایی، زنگ‌زدایی و آماده‌سازی سطح بدون ایجاد گرد و غبار برای صنایع نفت، گاز، پتروشیمی و سازه‌های دریایی.",
    fullDescriptionParagraphs: [
      "سامانه وت‌بلاست پرتابل هزاره کالا، راهکاری مدرن و بدون غبار برای عملیات آماده‌سازی سطح، رنگ‌زدایی، زنگ‌زدایی و رسوب‌زدایی خطوط لوله و مخازن است.",
      "با ترکیب کنترل‌شده آب و ذرات ساینده، میزان پراکندگی ذرات معلق در هوا تا ۹۵ درصد نسبت به سندبلاست خشک سنتی کاهش یافته و از خطرات تنفسی و آلودگی محیط زیست جلوگیری می‌کند.",
      "مجهز به مخزن فولادی تحت فشار با گواهی استاندارد، شیرهای پنوماتیک ضدسایش و شاسی چرخ‌دار کارگاهی با مانورپذیری بالا.",
    ],
    metaTitle: "دستگاه وت‌بلاست پرتابل | هزاره کالا",
    metaDescription:
      "دستگاه وت‌بلاست بدون غبار ساخت شرکت هزاره کالا دانش اروند مناسب عملیات سندبلاست مرطوب و رسوب‌زدایی تجهیزات صنعتی.",
    isFeatured: true,
    isActive: true,
    specifications: [
      { standardFeature: "maxPressure", value: "12", unit: "bar", isNumeric: true },
      { standardFeature: "casingMaterial", value: "مخزن فولادی تحت فشار با پوشش محافظ اپوکسی", isNumeric: false },
      { standardFeature: "custom", customLabel: "سیستم پاشش", value: "ترکیب آب و ذرات ساینده بدون ایجاد گرد و غبار", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع شاسی", value: "شاسی چرخ‌دار کارگاهی قابل‌حمل", isNumeric: false },
    ],
  },
];

import { migrateProductCategories } from "./migrate-categories";

/* ── Seed Runner ── */
export async function seedProductsSafe() {
  console.log("=== شروع بررسی و درج محصولات در Payload CMS ===");
  const { getPayload } = await import("payload");
  const configModule = await import("./payload.config");
  const config = configModule.default;

  const payload = await getPayload({ config });

  // ۱. ابتدا مهاجرت و همگام‌سازی دسته‌بندی‌ها را اجرا می‌کنیم
  await migrateProductCategories(payload);

  const results: string[] = [];

  for (const prod of PRODUCTS_TO_SEED) {
    try {
      const existing = await payload.find({
        collection: "products",
        where: {
          slug: {
            equals: prod.slug,
          },
        },
        limit: 1,
        depth: 0,
      });

      if (existing.docs.length > 0) {
        console.log(`[موجود] محصول «${prod.title}» از قبل در دیتابیس وجود دارد و تصاویر آن حفظ شد.`);
        results.push(`موجود: ${prod.title}`);
      } else {
        console.log(`[جدید] در حال افزودن محصول جدید: «${prod.title}»`);

        // یافتن شناسه دیتابیس (ObjectId) دسته‌بندی مربوطه
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
            isActive: prod.isActive,
            order: prod.order,
            specifications: prod.specifications,
          } as any,
        });
        results.push(`افزوده شد: ${prod.title}`);
      }
    } catch (err: any) {
      console.error(`خطا در ثبت محصول ${prod.slug}:`, err?.message || err);
      results.push(`خطا (${prod.slug}): ${err?.message}`);
    }
  }

  console.log("=== پایان عملیات درج محصولات ===");
  return results;
}

if (process.argv[1] && process.argv[1].endsWith("seed.ts")) {
  seedProductsSafe()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("خطای اسکریپت seed:", err);
      process.exit(1);
    });
}
