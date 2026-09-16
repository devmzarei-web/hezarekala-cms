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
      format: "",
      indent: 0,
      version: 1,
      children: paragraphs.map((text) => ({
        type: "paragraph",
        format: "",
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

/* ── Product Categories Seed Data ── */
const CATEGORIES_DATA = [
  {
    title: "دیزل ژنراتور و موتور دیزلی",
    slug: "generators",
    description: "انواع دیزل ژنراتورهای صنعتی، کانوپی‌دار سایلنت و موتورهای دیزل سنگین",
    order: 1,
    isActive: true,
  },
  {
    title: "پمپ دنده‌ای و غلیظ‌کش",
    slug: "gear",
    description: "پمپ‌های دنده‌ای جابه‌جایی مثبت صنعتی جهت انتقال سیالات سنگین، سوخت، قیر و روغن‌های صنعتی",
    order: 2,
    isActive: true,
  },
  {
    title: "پمپ سانتریفیوژ و خودمکش",
    slug: "centrifugal",
    description: "پمپ‌های سانتریفیوژ حلزونی، خودمکش تمام‌اتوماتیک و پمپاژ لجن و پساب صنعتی",
    order: 3,
    isActive: true,
  },
  {
    title: "پمپ لجن‌کش و خودمکش",
    slug: "sludge-pumps",
    description: "پمپ‌های خودمکش پروانه‌باز تخصصی انتقال لجن‌های سنگین، شن و ماسه و سیالات حاوی مواد جامد",
    order: 4,
    isActive: true,
  },
  {
    title: "پمپ دنده‌ای پرتابل",
    slug: "gear-pumps",
    description: "پکیج‌های پمپ پرتابل شاسی‌دار مجهز به موتور دیزل و کاور سایلنت جاذب صوت",
    order: 5,
    isActive: true,
  },
  {
    title: "وت‌بلاست و آماده‌سازی سطح",
    slug: "other",
    description: "سامانه‌های سندبلاست مرطوب، زنگ‌زدایی و آماده‌سازی سطوح صنعتی بدون غبار",
    order: 6,
    isActive: true,
  },
  {
    title: "پمپ پیستونی",
    slug: "piston",
    description: "پمپ‌های فشار قوی پیستونی رفت و برگشتی جهت تزریق مواد شیمیایی و شستشوی صنعتی",
    order: 7,
    isActive: true,
  },
  {
    title: "پمپ طبقاتی",
    slug: "multistage",
    description: "پمپ‌های طبقاتی سانتریفیوژ فشار قوی برای تأمین آب صنعتی و تغذیه دیگ‌های بخار",
    order: 8,
    isActive: true,
  },
  {
    title: "خدمات ماشین‌کاری سنگین",
    slug: "machining",
    description: "خدمات تخصصی تراشکاری، فرزکاری دروازه‌ای، سنگ‌زنی و ساخت قطعات صنعتی سنگین",
    order: 9,
    isActive: true,
  },
];

/* ── Industrial Products Seed Data ── */
const PRODUCTS_DATA = [
  {
    title: "دیزل ژنراتور صنعتی ۴۵ کاوا (45 KVA Diesel Generator)",
    slug: "diesel-generator-45kva",
    categorySlug: "generators",
    order: 1,
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
    categorySlug: "gear",
    order: 2,
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
    categorySlug: "centrifugal",
    order: 3,
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
    categorySlug: "centrifugal",
    order: 4,
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
    categorySlug: "centrifugal",
    order: 5,
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
    categorySlug: "other",
    order: 6,
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

/* ── Seed Runner ── */
async function seed() {
  console.log("=== شروع فرآیند درج و همگام‌سازی دسته‌بندی‌ها و محصولات Payload CMS ===");
  const { getPayload } = await import("payload");
  const configModule = await import("./payload.config");
  const config = configModule.default;

  const payload = await getPayload({ config });

  // 1. درج / بروزرسانی دسته‌بندی‌های محصولات (ProductCategories)
  console.log("\n[۱/۲] درج و بروزرسانی دسته‌بندی‌ها در مجموعه product-categories...");
  const categoryMap: Record<string, string> = {};

  for (const cat of CATEGORIES_DATA) {
    try {
      const existing = await payload.find({
        collection: "product-categories",
        where: {
          slug: {
            equals: cat.slug,
          },
        },
        limit: 1,
      });

      let catId: string;
      if (existing.docs.length > 0) {
        catId = existing.docs[0].id;
        console.log(`- بروزرسانی دسته‌بندی: ${cat.title} (${cat.slug}) -> ID: ${catId}`);
        await payload.update({
          collection: "product-categories",
          id: catId,
          data: {
            title: cat.title,
            slug: cat.slug,
            description: cat.description,
            order: cat.order,
            isActive: cat.isActive,
          },
        });
      } else {
        const created = await payload.create({
          collection: "product-categories",
          data: {
            title: cat.title,
            slug: cat.slug,
            description: cat.description,
            order: cat.order,
            isActive: cat.isActive,
          },
        });
        catId = created.id;
        console.log(`+ ایجاد دسته‌بندی جدید: ${cat.title} (${cat.slug}) -> ID: ${catId}`);
      }
      categoryMap[cat.slug] = catId;
    } catch (err) {
      console.error(`خطا در ایجاد/بروزرسانی دسته‌بندی ${cat.slug}:`, err);
    }
  }

  // 2. درج / بروزرسانی محصولات (Products)
  console.log("\n[۲/۲] درج و بروزرسانی محصولات در مجموعه products...");
  for (const prod of PRODUCTS_DATA) {
    try {
      const existing = await payload.find({
        collection: "products",
        where: {
          slug: {
            equals: prod.slug,
          },
        },
        limit: 1,
      });

      const catId = categoryMap[prod.categorySlug];
      const productPayload: any = {
        title: prod.title,
        slug: prod.slug,
        category: catId || undefined,
        shortDescription: prod.shortDescription,
        fullDescription: buildLexicalContent(prod.fullDescriptionParagraphs),
        metaTitle: prod.metaTitle,
        metaDescription: prod.metaDescription,
        isFeatured: prod.isFeatured,
        isActive: prod.isActive,
        order: prod.order,
        specifications: prod.specifications,
      };

      if (existing.docs.length > 0) {
        const targetId = existing.docs[0].id;
        console.log(`- بروزرسانی محصول: ${prod.title} (slug: ${prod.slug}) -> ID: ${targetId}`);
        await payload.update({
          collection: "products",
          id: targetId,
          data: productPayload,
        });
      } else {
        console.log(`+ ایجاد محصول جدید: ${prod.title} (slug: ${prod.slug})`);
        await payload.create({
          collection: "products",
          data: productPayload,
        });
      }
    } catch (err) {
      console.error(`خطا در ایجاد/بروزرسانی محصول ${prod.slug}:`, err);
    }
  }

  console.log("\n=== عملیات درج محصولات با موفقیت به پایان رسید! ===");
  console.log("اکنون کلیه ۶ محصول به همراه دسته‌بندی‌ها و توضیحات کامل در پنل ادمین پیلود در دسترس هستند.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("خطای کلی در فرآیند Seeding:", err);
  process.exit(1);
});
