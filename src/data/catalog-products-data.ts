/**
 * catalog-products-data.ts
 * Comprehensive catalog dataset containing all Motorsazan Generating Sets (10 models),
 * Standalone Industrial Engines, and HezarehKala Heavy Pump Packages.
 *
 * NOTE: All items MUST default to `isActive: false` per User Mandate
 * to allow administrative review and verification before publishing.
 */

export interface ProductSeedItem {
  title: string;
  slug: string;
  category: "generators" | "gear-pumps" | "centrifugal" | "other";
  order: number;
  shortDescription: string;
  fullDescriptionParagraphs: string[];
  metaTitle: string;
  metaDescription: string;
  isFeatured: boolean;
  isActive: boolean; // Always false on initial seeding
  specifications: Array<{
    standardFeature: string;
    customLabel?: string;
    label?: string;
    value: string;
    unit?: string;
    isNumeric: boolean;
  }>;
}

export const CATALOG_PRODUCTS: ProductSeedItem[] = [
  // ── 1. Generator: 3DN23G-40UFA (25 kVA) ──
  {
    title: "موتور ژنراتور دیزلی ۲۵ کاوا موتورسازان (مدل 3DN23G-40UFA)",
    slug: "generator-3dn23g-40ufa-25kva",
    category: "generators",
    order: 10,
    shortDescription:
      "دیزل ژنراتور سه فاز ۲۵ کاوا (۲۰ کیلووات اضطراری) مجهز به موتور دیزل موتورسازان 3.152G، آلترناتور سنکرون براشلس ۴۰۰ ولت، شاسی باکدار ۶۵ لیتری و سیستم کنترل اتوماتیک/دستی.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور صنعتی مدل 3DN23G-40UFA مجهز به موتور دیزل سه سیلندر خطی آب‌خنک موتورسازان تبریز مدل 3.152G با کد قطعه ۳۱۱۵۲۳۳۶ است. این دستگاه توانایی تولید توان اضطراری ۲۵ کاوا (۲۰ کیلووات) در فرکانس ۵۰ هرتز و دور ۱۵۰۰ دور بر دقیقه را دارا می‌باشد.",
      "موتور ۳ سیلندر با حجم جابجایی ۲.۵ لیتر و سیستم تنفس طبیعی با کورس ۱۲۷ میلی‌متر و قطر سیلندر ۹۱.۴ میلی‌متر، پایداری حرارتی بی‌نظیر و مصرف سوخت بسیار اقتصادی را در کاربری‌های مداوم و اضطراری فراهم می‌کند.",
      "آلترناتور دستگاه از نوع سنکرون بدون جاروبک (Brushless) چهار قطبی با کلاس عایق‌بندی H و ضریب حفاظت IP23 است. رگولاتور ولتاژ اتوماتیک (AVR) نوسانات ولتاژ خروجی را در محدوده ۱± درصد تثبیت می‌نماید.",
      "شاسی دستگاه از فولاد ضخیم صنعتی ساخته شده و مجهز به مخزن سوخت یکپارچه ۶۵ لیتری، لرزه‌گیرهای ارتعاشی لاستیکی-فولادی، باطری و اگزوز استاندارد کارگاهی می‌باشد. تابلو کنترل در دو نسخه اتوماتیک اضطراری (ATS) و دستی ارائه می‌گردد.",
    ],
    metaTitle: "دیزل ژنراتور ۲۵ کاوا موتورسازان 3DN23G-40UFA | هزاره کالا",
    metaDescription:
      "مشخصات فنی دیزل ژنراتور ۲۵ کاوا با موتور موتورسازان 3.152G، توان استندبای ۲۰ کیلووات، سیستم خنک‌کننده آب‌خنک و تابلو هوشمند کنترل اضطراری.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "25", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "20", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز 3.152G (کد قطعه: 31152336)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "690", unit: "kg", isNumeric: true },
      { standardFeature: "casingMaterial", value: "شاسی فولادی صلب صنعتی با باک یکپارچه", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31152340", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31152339", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "22.5", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و آرایش", value: "۳ سیلندر خطی", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "2.5", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "65", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1450 x 750 x 1150", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 2. Generator: 4GN30G-50UFA (35 kVA Gas) ──
  {
    title: "موتور ژنراتور گازسوز ۳۵ کاوا موتورسازان (مدل 4GN30G-50UFA)",
    slug: "generator-4gn30g-50ufa-35kva-gas",
    category: "generators",
    order: 20,
    shortDescription:
      "ژنراتور گازسوز دائم‌کار ۳۵ کاوا (۲۸ کیلووات) مجهز به موتور گازسوز ۴ سیلندر موتورسازان MN440A-45GN، سازگار با گاز طبیعی و CNG شهری، کم‌صدا و سازگار با محیط زیست.",
    fullDescriptionParagraphs: [
      "موتور ژنراتور پایه گازسوز مدل 4GN30G-50UFA با موتور ۴ سیلندر صنعتی موتورسازان تبریز مدل MN440A-45GN (کد قطعه ۳۱۲۴۴۵۳۳) یک انتخاب ایده‌آل برای مجتمع‌های مسکونی، تجاری و مزارع پرورش طیور با خطوط گاز شهری است.",
      "توان اضطراری دستگاه ۳۵ کاوا (۲۸ کیلووات) و توان دائم‌کار آن ۳۱.۵ کاوا (۲۵.۲ کیلووات) است. این موتور گازسوز با حجم ۴.۰۶ لیتر و سیستم مدیریت سوخت گازسوز اختصاصی، کاهش چشمگیر در هزینه‌های سوخت و آلایندگی نسبت به دیزل به همراه دارد.",
      "دستگاه به رگولاتور گاز ایمن، میکسر گاز و هوا، گاورنر الکترونیکی دقیق با زمان پاسخ‌دهی سریع به تغییرات بار ناگهانی و آلترناتور سنکرون براشلس مجهز شده است.",
    ],
    metaTitle: "ژنراتور گازسوز ۳۵ کاوا موتورسازان 4GN30G-50UFA | هزاره کالا",
    metaDescription:
      "ژنراتور گازسوز صنعتی ۳۵ کاوا با موتور ۴ سیلندر موتورسازان، کارکرد بدون بو و کم‌صدا با گاز شهری و CNG، گارانتی و خدمات پس از فروش رسمی.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "35", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "28", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MN440A-45GN (کد قطعه: 31244533)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "770", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31244437", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31244436", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع سوخت", value: "گاز طبیعی شهری (NG) / گاز فشرده (CNG)", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "31.5", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و آرایش", value: "۴ سیلندر خطی گازسوز", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.06", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1650 x 800 x 1250", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 3. Generator: 4DN42G-60UFA (47 kVA) ──
  {
    title: "موتور ژنراتور دیزلی ۴۷ کاوا موتورسازان (مدل 4DN42G-60UFA)",
    slug: "generator-4dn42g-60ufa-47kva",
    category: "generators",
    order: 30,
    shortDescription:
      "دیزل ژنراتور ۴۷ کاوا (۳۷.۶ کیلووات) مجهز به موتور دیزل ۴ سیلندر موتورسازان 4.236G (کلاس پرکینز)، کم‌استهلاک، بادوام و مناسب کارگاه‌ها و پروژه‌های عمرانی.",
    fullDescriptionParagraphs: [
      "مدل 4DN42G-60UFA بر پایه موتور شناخته‌شده و فوق‌العاده با دوام ۴ سیلندر موتورسازان تبریز مدل 4.236G (کد قطعه ۳۱۲۳۶۴۴۰) مونتاژ گردیده است. این موتور دارای حجم جابجایی ۳.۸۶ لیتر با نسبت تراکم ۱۶:۱ و تنفس طبیعی است.",
      "توان خروجی اضطراری دستگاه ۴۷ کاوا (۳۷.۶ کیلووات) و توان پیوسته آن ۴۲.۵ کاوا (۳۴ کیلووات) در ۱۵۰۰ دور در دقیقه می‌باشد. استهلاک پایین قطعات یدکی و فراوانی فوق‌العاده لوازم در سراسر ایران، این مدل را به پرفروش‌ترین دیزل ژنراتور میان‌رده تبدیل کرده است.",
      "مجهز به آلترناتور سنکرون ۴ پل با بازدهی ۹۰ درصد، مخزن سوخت ۱۰۰ لیتری و اگزوز استاندارد خفه‌کننده صدا.",
    ],
    metaTitle: "دیزل ژنراتور ۴۷ کاوا موتورسازان 4DN42G-60UFA | هزاره کالا",
    metaDescription:
      "دیزل ژنراتور صنعتی ۴۷ کاوا با موتور موتورسازان 4.236G، راندمان بالا، در دسترس بودن قطعات در سراسر کشور و شاسی مستحکم باکدار.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "47", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "37.6", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز 4.236G (کد قطعه: 31236440)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "950", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31236474", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31236473", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "42.5", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و آرایش", value: "۴ سیلندر خطی", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "3.86", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "100", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1750 x 800 x 1300", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 4. Generator: 4DN44G-75UFA (50 kVA Diesel) ──
  {
    title: "موتور ژنراتور دیزلی ۵۰ کاوا موتورسازان (مدل 4DN44G-75UFA)",
    slug: "generator-4dn44g-75ufa-50kva",
    category: "generators",
    order: 40,
    shortDescription:
      "دیزل ژنراتور ۵۰ کاوا (۴۰ کیلووات) مجهز به موتور دیزل ۴ سیلندر موتورسازان MN440A-60GD، با رادیاتور فابریک و عملکرد پایدار در بارهای متناوب سنگین.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور صنعتی مدل 4DN44G-75UFA مجهز به موتور دیزل ۴ سیلندر تقویت‌شده موتورسازان مدل MN440A-60GD با کد قطعه ۳۱۲۴۴۵۵۰ است. این موتور حجم جابجایی ۴.۰۶ لیتر و ساختاری فوق‌العاده مقاوم در برابر فشارهای مکانیکی دارد.",
      "توان نامی استندبای دستگاه ۵۰ کاوا (۴۰ کیلووات) و توان پرایم ۴۵ کاوا (۳۶ کیلووات) می‌باشد. مناسب کارخانجات، کارگاه‌های صنعتی، مجتمع‌های تجاری و تجهیزات بیمارستانی.",
      "سیستم برق ۲۴ ولت به همراه دینام شارژر باتری، رادیاتور با راندمان بالا برای اقلیم‌های گرم و مرطوب جنوب کشور و کوپلینگ مستقیم صنعتی با هوزینگ SAE.",
    ],
    metaTitle: "دیزل ژنراتور ۵۰ کاوا موتورسازان 4DN44G-75UFA | هزاره کالا",
    metaDescription:
      "دیزل ژنراتور ۵۰ کاوا با موتور موتورسازان MN440A-60GD، سیستم خنک‌کاری پیشرفته و شاسی مقاوم برای مصارف صنعتی دائم و اضطراری.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "50", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "40", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MN440A-60GD (کد قطعه: 31244550)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "950", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31244441", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31244440", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "45", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و آرایش", value: "۴ سیلندر خطی", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.06", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "100", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1750 x 800 x 1300", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 5. Generator: 4GTI44G-70UFA (50 kVA Gas - In Stock) ──
  {
    title: "موتور ژنراتور گازسوز توربوشارژ ۵۰ کاوا موتورسازان (مدل 4GTI44G-70UFA)",
    slug: "generator-4gti44g-70ufa-50kva-gas",
    category: "generators",
    order: 50,
    shortDescription:
      "ژنراتور گازسوز ۵۰ کاوا (۴۰ کیلووات) مجهز به موتور گازسوز توربوشارژ و اینترکولر موتورسازان MTI440A-70GN (کد انبار ۲۴۴۵۴۲)، موجود و آماده تحویل فوری از انبار هزاره کالا.",
    fullDescriptionParagraphs: [
      "موتور ژنراتور توربوشارژ پایه گازسوز مدل 4GTI44G-70UFA مجهز به موتور قدرتمند ۴ سیلندر توربوشارژ همراه با اینترکولر (Turbocharged & Intercooled) موتورسازان تبریز مدل MTI440A-70GN با کد کارخانه‌ای ۳۱۲۴۴۵۳۵ است. این دستگاه با کد فاکتور رسمی ۲۴۴۵۴۲ مستقیماً در انبار ۸۵۴ شرکت هزاره کالا دانش اروند موجود بوده و امکان تحویل فوری به صنایع متقاضی را دارد.",
      "بهره‌گیری از سیستم توربوشارژ همراه با خنک‌کننده میانی هوا (Intercooler) سبب احتراق فوق‌العاده کامل گاز و دستیابی به توان ۵۰ کاوا (۴۰ کیلووات اضطراری) و ۴۵ کاوا (۳۶ کیلووات دائم) با کمترین مصرف سوخت گاز طبیعی شده است.",
      "دستگاه دارای سیستم مدیریت پاشش و کنترل الکترونیکی دقیق، عایق‌بندی صوتی عالی، آلترناتور سنکرون براشلس ۴۰۰ ولت ۳ فاز با عایق کلاس H و رادیاتور گرمسیری هوی‌دیوتی می‌باشد.",
      "شاسی تقویت‌شده دستگاه وزنی معادل ۱۰۹۵ کیلوگرم داشته و تمامی مدارات حفاظتی فشار روغن، دمای آب، فرکانس و اضافه بار به صورت اتوماتیک پایش می‌گردند.",
    ],
    metaTitle: "ژنراتور گازسوز ۵۰ کاوا موتورسازان 4GTI44G | تحویل فوری",
    metaDescription:
      "ژنراتور گازسوز ۵۰ کاوا توربو اینترکولر با موتور موتورسازان MTI440A-70GN کد ۲۴۴۵۴۲، موجود در انبار هزاره کالا، تحویل فوری همراه با گارانتی رسمی.",
    isFeatured: true,
    isActive: false, // Draft mode per mandate
    specifications: [
      { standardFeature: "kva", value: "50", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "40", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MTI440A-70GN توربو اینترکولر (کد قطعه: 31244535)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور هوی‌دیوتی و اینترکولر هوا به هوا", isNumeric: false },
      { standardFeature: "weight", value: "1095", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31244542", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31244544", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد فاکتور رسمی / انبار", value: "244542 (انبار ۸۵۴ هزاره کالا)", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع تنفس و تقویت هوا", value: "توربوشارژر و خنک‌کننده میانی (Turbocharged & Intercooled)", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "45", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و آرایش", value: "۴ سیلندر خطی گازسوز", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.06", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1850 x 850 x 1350", unit: "mm", isNumeric: false },
    ],
  },

  // ── 6. Generator: 4DT56G-85UFA (63 kVA) ──
  {
    title: "موتور ژنراتور دیزلی توربوشارژ ۶۳ کاوا موتورسازان (مدل 4DT56G-85UFA)",
    slug: "generator-4dt56g-85ufa-63kva",
    category: "generators",
    order: 60,
    shortDescription:
      "دیزل ژنراتور توربوشارژ ۶۳ کاوا (۵۰.۴ کیلووات) مجهز به موتور دیزل ۴ سیلندر موتورسازان MT440A-75GD، قدرت و شتاب بالا برای استارت بارهای سلفی سنگین.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور مدل 4DT56G-85UFA مجهز به موتور دیزل ۴ سیلندر توربوشارژ موتورسازان تبریز مدل MT440A-75GD (کد قطعه ۳۱۲۴۴۵۴۱) است. این دستگاه با تقویت توربوشارژر به توان اضطراری ۶۳ کاوا (۵۰.۴ کیلووات) و توان پرایم ۵۶.۵ کاوا (۴۵.۲ کیلووات) دست یافته است.",
      "موتور توربوشارژ با گشتاور بالا در دورهای کاری، تحمل عالی در پذیرش ناگهانی بارهای الکتروموتوری (Load Step) را بدون افت فرکانس و ولتاژ تضمین می‌کند.",
      "سیستم خنک‌کننده مداربسته با پروانه دمنده قوی، مخزن سوخت ۱۲۰ لیتری و شاسی صلب مجهز به لرزه‌گیرهای ارتعاشی صنعتی.",
    ],
    metaTitle: "دیزل ژنراتور توربوشارژ ۶۳ کاوا موتورسازان 4DT56G-85UFA | هزاره کالا",
    metaDescription:
      "دیزل ژنراتور ۶۳ کاوا توربوشارژ مجهز به موتور موتورسازان MT440A-75GD، توان خروجی پایدار، مصرف سوخت بهینه و استانداردهای صنعتی.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "63", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "50.4", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MT440A-75GD توربوشارژ (کد قطعه: 31244541)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "950", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31244558", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31244557", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "56.5", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و سیستم تنفس", value: "۴ سیلندر خطی توربوشارژ", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.06", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "120", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1750 x 800 x 1300", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 7. Generator: 4DTI71G-130UFA (80 kVA) ──
  {
    title: "موتور ژنراتور دیزلی توربو اینترکولر ۸۰ کاوا موتورسازان (مدل 4DTI71G-130UFA)",
    slug: "generator-4dti71g-130ufa-80kva",
    category: "generators",
    order: 70,
    shortDescription:
      "دیزل ژنراتور توربو اینترکولر ۸۰ کاوا (۶۴ کیلووات) مجهز به موتور دیزل ۴ سیلندر موتورسازان MTI440C-100GD، با راندمان حرارتی بالا و باک ۱۴۰ لیتری.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور مدل 4DTI71G-130UFA از پیشرفته‌ترین موتورهای ۴ سیلندر خطی موتورسازان تبریز یعنی مدل MTI440C-100GD (کد قطعه ۳۱۴۰۰۴۳۴) بهره می‌برد. این دستگاه مجهز به توربوشارژر و خنک‌کننده هوا به هوای اینترکولر است.",
      "توان اضطراری ۸۰ کاوا (۶۴ کیلووات) و توان پرایم ۷۲ کاوا (۵۷.۶ کیلووات) دستگاه را برای مصارف حساس کارگاهی، صنایع بسته‌بندی، سردخانه‌ها و بیمارستان‌های محلی بسیار پرکاربرد ساخته است.",
      "آلترناتور کلاس H با درجه حفاظت صنعتی، تابلو کنترل میکروپروسسوری پیشرفته، شاسی فولادی با وزن ۱۱۹۵ کیلوگرم و باک یکپارچه ۱۴۰ لیتری.",
    ],
    metaTitle: "دیزل ژنراتور ۸۰ کاوا موتورسازان 4DTI71G-130UFA | هزاره کالا",
    metaDescription:
      "مشخصات فنی دیزل ژنراتور ۸۰ کاوا توربو اینترکولر موتورسازان MTI440C-100GD، عملکرد عالی در شرایط آب و هوایی دشوار و راندمان الکتریکی بالا.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "80", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "64", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MTI440C-100GD توربو اینترکولر (کد قطعه: 31400434)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری و اینترکولر", isNumeric: false },
      { standardFeature: "weight", value: "1195", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31400438", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31400435", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "72", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و سیستم تنفس", value: "۴ سیلندر خطی توربو اینترکولر", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.06", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "140", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "1900 x 850 x 1400", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 8. Generator: 6DT89G-150UFA (110 kVA) ──
  {
    title: "موتور ژنراتور دیزلی ۶ سیلندر ۱۱۰ کاوا موتورسازان (مدل 6DT89G-150UFA)",
    slug: "generator-6dt89g-150ufa-110kva",
    category: "generators",
    order: 80,
    shortDescription:
      "دیزل ژنراتور ۶ سیلندر ۱۱۰ کاوا (۸۸ کیلووات) مجهز به موتور دیزل توربوشارژ ۶ لیتری موتورسازان MT660A-130GD، توان پایدار و مداوم برای صنایع سنگین و خطوط تولید.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور پرقدرت مدل 6DT89G-150UFA از موتور دیزل سنگین ۶ سیلندر خطی توربوشارژ موتورسازان تبریز مدل MT660A-130GD (کد قطعه ۳۱۶۰۰۶۳۸) بهره می‌برد. حجم موتور ۶.۰ لیتر بوده و نیروی مکانیکی پایدار و بدون لرزشی را تأمین می‌نماید.",
      "دستگاه توانایی تولید توان اضطراری ۱۱۰ کاوا (۸۸ کیلووات) و توان پرایم ۱۰۰ کاوا (۸۰ کیلووات) در دور ۱۵۰۰ RPM را داراست.",
      "مجهز به باک گازوئیل ۱۸۰ لیتری در داخل شاسی، لرزه‌گیرهای هیدرولیکی-لاستیکی، عایق‌بندی کامل سیم‌پیچی‌های ژنراتور با رزین وکیوم و سیستم حفاظت الکترونیکی پیشرفته.",
    ],
    metaTitle: "دیزل ژنراتور ۶ سیلندر ۱۱۰ کاوا موتورسازان 6DT89G-150UFA | هزاره کالا",
    metaDescription:
      "دیزل ژنراتور سنگین ۱۱۰ کاوا با موتور ۶ سیلندر توربو موتورسازان مدل MT660A-130GD، پایداری فوق‌العاده در بارهای طولانی‌مدت و صنایع نفت و گاز.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "110", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "88", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MT660A-130GD توربوشارژ (کد قطعه: 31600638)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری هوی‌دیوتی مدار بسته", isNumeric: false },
      { standardFeature: "weight", value: "1355", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31600645", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31600646", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "100", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و سیستم تنفس", value: "۶ سیلندر خطی توربوشارژ", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "6.0", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "180", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "2200 x 950 x 1500", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 9. Generator: 6DTI115G-200UFA (135 kVA - In Stock) ──
  {
    title: "موتور ژنراتور دیزلی ۶ سیلندر ۱۳۵ کاوا موتورسازان (مدل 6DTI115G-200UFA)",
    slug: "generator-6dti115g-200ufa-135kva",
    category: "generators",
    order: 90,
    shortDescription:
      "دیزل ژنراتور ۱۳۵ کاوا (۱۰۸ کیلووات) مجهز به موتور دیزل ۶ سیلندر توربو اینترکولر موتورسازان MTI660A-163GD (کد انبار ۶۰۰۶۵۲)، موجود و آماده تحویل فوری از انبار هزاره کالا.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور فوق‌العاده قدرتمند مدل 6DTI115G-200UFA مجهز به موتور دیزل ۶ سیلندر توربو اینترکولر (Turbocharged & Intercooled) موتورسازان تبریز مدل MTI660A-163GD با کد قطعه ۳۱۶۰۰۶۵۲ است. این دستگاه با کد فاکتور رسمی ۶۰۰۶۵۲ مستقیماً در انبار ۸۵۴ شرکت هزاره کالا دانش اروند انبارش شده و آماده تحویل آنی به پروژه‌های صنعتی و نیروگاهی می‌باشد.",
      "توان نامی استندبای دستگاه ۱۳۵ کاوا (۱۰۸ کیلووات) و توان دائم‌کار (Prime) آن ۱۲۲ کاوا (۹۷.۶ کیلووات) است. این موتور ۶ سیلندر با حجم ۶.۰ لیتر و سیستم پیشرفته سوخت‌رسانی، بالاترین سطح اطمینان را برای تأمین برق کارخانجات، معادن و صنایع نفت و پتروشیمی به ارمغان می‌آورد.",
      "دستگاه دارای آلترناتور سنکرون ۴ پل کلاس H با رگولاتور ولتاژ خودکار AVR، شاسی هوی‌دیوتی صنعتی با باک ۲۲۰ لیتری، لرزه‌گیرهای جذب ارتعاش و تابلو میکروپروسسوری با مانیتورینگ پارامترهای موتور و ژنراتور است.",
    ],
    metaTitle: "دیزل ژنراتور ۱۳۵ کاوا موتورسازان 6DTI115G | تحویل فوری",
    metaDescription:
      "دیزل ژنراتور ۶ سیلندر ۱۳۵ کاوا موتورسازان مدل MTI660A-163GD کد ۶۰۰۶۵۲، موجود در انبار هزاره کالا، تحویل فوری همراه با خدمات نصب و راه‌اندازی.",
    isFeatured: true,
    isActive: false, // Draft mode per mandate
    specifications: [
      { standardFeature: "kva", value: "135", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "108", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MTI660A-163GD توربو اینترکولر (کد قطعه: 31600652)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری هوی‌دیوتی مدار بسته و اینترکولر", isNumeric: false },
      { standardFeature: "weight", value: "1500", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31600659", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31600656", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد فاکتور رسمی / انبار", value: "600652 (انبار ۸۵۴ هزاره کالا)", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "122", unit: "kVA", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و سیستم تنفس", value: "۶ سیلندر خطی توربو اینترکولر", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "6.0", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "220", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "2350 x 950 x 1550", unit: "mm", isNumeric: false },
    ],
  },

  // ── 10. Generator: 6DTI120G-216UFA (150 kVA Standby / 135 kVA Prime) ──
  {
    title: "موتور ژنراتور دیزلی ۶ سیلندر ۱۵۰ کاوا موتورسازان (مدل 6DTI120G-216UFA)",
    slug: "generator-6dti120g-216ufa-150kva",
    category: "generators",
    order: 100,
    shortDescription:
      "دیزل ژنراتور ۱۵۰ کاوا استندبای / ۱۳۵ کاوا دائم (۱۲۰ کیلووات) مجهز به موتور دیزل ۶ سیلندر ارتقایافته موتورسازان MTI660A-181GD، قدرتمندترین دیزل ژنراتور رده موتورسازان.",
    fullDescriptionParagraphs: [
      "دیزل ژنراتور سنگین مدل 6DTI120G-216UFA مجهز به قدرتمندترین موتور ۶ سیلندر توربو اینترکولر موتورسازان تبریز مدل MTI660A-181GD با کد قطعه ۳۱۶۰۰۶۶۵ است. این مدل بالاترین توان خروجی در میان خانواده دیزل ژنراتورهای موتورسازان را به ارمغان می‌آورد.",
      "دستگاه دارای توان اضطراری (Standby) معادل ۱۵۰ کاوا (۱۲۰ کیلووات) و توان مداوم کاری (Prime) برابر ۱۳۵ کاوا (۱۰۸ کیلووات) در فرکانس ۵۰ هرتز و دور ۱۵۰۰ دور بر دقیقه است.",
      "موتور ۶ لیتری با رادیاتور سایز بزرگ آلومینیومی/مسی برای مقاومت در دمای هوای بالای ۵۰ درجه سانتی‌گراد مناطق نفت‌خیز جنوب طراحی شده است. مجهز به تابلو کنترل تمام دیجیتال با قابلیت پارالل شدن و پایش از راه دور.",
    ],
    metaTitle: "دیزل ژنراتور ۱۵۰ کاوا موتورسازان 6DTI120G-216UFA | هزاره کالا",
    metaDescription:
      "دیزل ژنراتور ۱۵۰ کاوا (۱۳۵ کاوا پرایم) با موتور موتورسازان MTI660A-181GD، رادیاتور گرمسیری سایز بزرگ، مناسب پالایشگاه‌ها، بیمارستان‌ها و صنایع بزرگ.",
    isFeatured: true,
    isActive: false,
    specifications: [
      { standardFeature: "kva", value: "150", unit: "kVA", isNumeric: true },
      { standardFeature: "power", value: "120", unit: "kW", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز MTI660A-181GD توربو اینترکولر (کد قطعه: 31600665)", isNumeric: false },
      { standardFeature: "speed", value: "1500", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور گرمسیری هوی‌دیوتی سایز بزرگ", isNumeric: false },
      { standardFeature: "weight", value: "1500", unit: "kg", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور اتوماتیک", value: "31600669", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد سفارش ژنراتور دستی", value: "31600668", isNumeric: false },
      { standardFeature: "custom", customLabel: "توان دائم (Prime Power)", value: "135", unit: "kVA (108 kW)", isNumeric: true },
      { standardFeature: "custom", customLabel: "تعداد سیلندر و سیستم تنفس", value: "۶ سیلندر خطی توربو اینترکولر", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "6.0", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "220", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "ابعاد دستگاه (L x W x H)", value: "2350 x 950 x 1550", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 11. Standalone Engine: Motorsazan 4.244 (In Stock) ──
  {
    title: "موتور دیزل صنعتی موتورسازان مدل 4.244 (Motorsazan 4.244 Diesel Engine)",
    slug: "motorsazan-4-244-diesel-engine",
    category: "generators",
    order: 110,
    shortDescription:
      "موتور دیزل ۴ سیلندر صنعتی آب‌خنک موتورسازان تبریز مدل 4.244 (کد انبار ۲۴۴۵۵۴)، توان ۸۲ اسب بخار، مناسب کوپلینگ با پمپ‌های صنعتی و ژنراتور، موجود و آماده تحویل فوری.",
    fullDescriptionParagraphs: [
      "موتور دیزل صنعتی ۴ سیلندر آب‌خنک موتورسازان تبریز مدل 4.244 با کد قطعه کارخانه‌ای ۳۱۲۴۴۵۵۴ و کد فاکتور رسمی ۲۴۴۵۵۴ مستقیماً در انبار ۸۵۴ شرکت هزاره کالا موجود است.",
      "این موتور بر پایه پلتفرم بسیار با دوام پرکینز طراحی شده و توانی معادل ۸۲ اسب بخار (۶۱ کیلووات) در دور ۲۲۰۰ RPM تولید می‌کند. گشتاور بالا در دورهای پایین و استهلاک قطعات بسیار کم، آن را به گزینه‌ای ایده‌آل برای به حرکت درآوردن پمپ‌های صنعتی، دستگاه‌های حفاری، کمپروسورها و ماشین‌آلات کشاورزی و ساختمانی تبدیل کرده است.",
      "موتور به صورت کامل به همراه رادیاتور فابریک، استارت، دینام ۲۴ ولت، فیلتراسیون دوبل گازوئیل و فلایویل استاندارد SAE جهت اتصال آسان به پمپ یا آلترناتور ارائه می‌شود.",
    ],
    metaTitle: "موتور دیزل موتورسازان 4.244 | تحویل فوری انبار هزاره کالا",
    metaDescription:
      "موتور دیزل صنعتی موتورسازان مدل 4.244 کد ۲۴۴۵۵۴، توان ۸۲ اسب بخار، ۴ سیلندر آب‌خنک، موجود در انبار هزاره کالا با تحویل فوری.",
    isFeatured: true,
    isActive: false, // Draft mode per mandate
    specifications: [
      { standardFeature: "power", value: "61", unit: "kW (82 HP)", isNumeric: true },
      { standardFeature: "engineModel", value: "موتورسازان تبریز مدل 4.244 (کد قطعه: 31244554)", isNumeric: false },
      { standardFeature: "speed", value: "2200", unit: "RPM", isNumeric: true },
      { standardFeature: "coolingType", value: "آب‌خنک با رادیاتور هوی‌دیوتی صنعتی", isNumeric: false },
      { standardFeature: "custom", customLabel: "کد فاکتور رسمی / انبار", value: "244554 (انبار ۸۵۴ هزاره کالا)", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
      { standardFeature: "custom", customLabel: "تعداد و آرایش سیلندرها", value: "۴ سیلندر خطی عمودی", isNumeric: false },
      { standardFeature: "custom", customLabel: "قطر سیلندر و کورس پیستون", value: "100 x 127", unit: "mm", isNumeric: false },
      { standardFeature: "custom", customLabel: "حجم جابجایی موتور", value: "4.0", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "سیستم تنفس", value: "تنفس طبیعی (Naturally Aspirated)", isNumeric: false },
      { standardFeature: "custom", customLabel: "کاربری اصلی", value: "محرک پمپ‌های صنعتی، بوسترپمپ، کمپرسور و دیزل ژنراتور", isNumeric: false },
    ],
  },

  // ── 12. Portable Gear Pump: HKDA-DGP-4D-001 (In Stock) ──
  {
    title: "پمپ دنده‌ای پرتابل ۴ اینچ دیزلی هزاره کالا (مدل HKDA-DGP-4D-001)",
    slug: "diesel-gear-pump-4-inch",
    category: "gear-pumps",
    order: 120,
    shortDescription:
      "پکیج پمپ دنده‌ای سنگین ۴ اینچ پرتابل با موتور دیزل، دبی ۳۵ مترمکعب بر ساعت و فشار ۶ بار، ویژه تخلیه مخازن سوخت، مازوت، قیر و روغن‌های صنعتی سنگین، موجود و آماده تحویل فوری.",
    fullDescriptionParagraphs: [
      "پکیج پمپ دنده‌ای سنگین پرتابل مدل HKDA-DGP-4D-001 محصول مهندسی شرکت هزاره کالا دانش اروند است که به طور اختصاصی جهت تخلیه، جابجایی و بارگیری سیالات فوق‌العاده ویسکوز نظیر نفت خام، مازوت، روغن‌های صنعتی سنگین، قیر مذاب و مواد پتروشیمی طراحی و تولید شده است.",
      "این سامانه از دنده‌های هلیکال ضدسایش سخت‌کاری‌شده سطحی با متریال فولاد آلیاژی بهره می‌برد که جریان سیال بدون ضربه و یکنواخت با دبی ۳۵ متر مکعب در ساعت در فشار ۶ بار را تأمین می‌کند.",
      "پکیج مجهز به شاسی چرخ‌دار کارگاهی صلب با قابلیت یدک‌کشی، موتور دیزل هواخنک ۱۵ اسب بخار با استارت الکتریکی و باتری صنعتی و شیر بای‌پس ایمنی (Relief Valve) قابل تنظیم است.",
    ],
    metaTitle: "پمپ دنده‌ای پرتابل ۴ اینچ دیزلی | تحویل فوری هزاره کالا",
    metaDescription:
      "پمپ دنده‌ای ۴ اینچ دیزلی پرتابل ساخت شرکت هزاره کالا جهت انتقال قیر، مازوت و سوخت‌های سنگین با دبی ۳۵ مترمکعب در ساعت و فشار ۶ بار.",
    isFeatured: true,
    isActive: false, // Draft mode per mandate
    specifications: [
      { standardFeature: "flowRate", value: "35", unit: "m³/h", isNumeric: true },
      { standardFeature: "maxPressure", value: "6", unit: "bar", isNumeric: true },
      { standardFeature: "power", value: "11", unit: "kW (15 HP)", isNumeric: true },
      { standardFeature: "speed", value: "750", unit: "RPM", isNumeric: true },
      { standardFeature: "casingMaterial", value: "چدن داکتیل مقاوم در برابر سایش", isNumeric: false },
      { standardFeature: "impellerMaterial", value: "دنده‌های جناغی و هلیکال فولاد آلیاژی سخت‌کاری‌شده سطحی", isNumeric: false },
      { standardFeature: "sealType", value: "پکینگ گرافیت تفلون نسوز مجهز به سیستم روانکاری گریس", isNumeric: false },
      { standardFeature: "maxTemp", value: "180", unit: "°C", isNumeric: true },
      { standardFeature: "custom", customLabel: "کد شناسایی و سفارش", value: "HKDA-DGP-4D-001", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
      { standardFeature: "custom", customLabel: "سایز ورودی و خروجی", value: "۴ اینچ (DN100) فلنجی", isNumeric: false },
      { standardFeature: "custom", customLabel: "ویسکوزیته مجاز سیال", value: "تا 50,000 cSt", isNumeric: false },
    ],
  },

  // ── 13. Self-Priming Trash Pump: 4-inch (In Stock) ──
  {
    title: "پمپ خودمکش ۴ اینچ لجن‌کش دیزلی پرتابل",
    slug: "self-priming-trash-pump-4-inch",
    category: "centrifugal",
    order: 130,
    shortDescription:
      "پمپ خودمکش ۴ اینچ دیزلی چرخ‌دار با دبی ۱۲۰ مترمکعب در ساعت، پروانه ضدگرفتگی چشم‌باز با قابلیت عبور جامدات تا ۵۰ میلی‌متر، موجود در انبار هزاره کالا.",
    fullDescriptionParagraphs: [
      "پمپ خودمکش لجن‌کش ۴ اینچ دیزلی هزاره کالا، راهکاری سریع و بی‌نیاز از پر کردن اولیه خط لوله (Self-Priming) جهت تخلیه آب‌های آلوده، گودال‌های حفاری عمرانی، سپتیک تانک‌ها و کانال‌های آب صنعتی است.",
      "مجهز به پروانه چشم‌باز از جنس چدن آلیاژی ضدسایش با توانایی عبور ذرات جامد تا قطر ۵۰ میلی‌متر و شاسی چرخ‌دار قابل حمل با موتور دیزل تک‌سیلندر پرقدرت ۲۴ اسب بخار.",
    ],
    metaTitle: "پمپ خودمکش ۴ اینچ لجن‌کش دیزلی | هزاره کالا",
    metaDescription:
      "پمپ خودمکش دیزلی ۴ اینچ با دبی ۱۲۰ مترمکعب بر ساعت، عبور ذرات ۵۰ میلی‌متر، شاسی پرتابل، موجود در انبار هزاره کالا.",
    isFeatured: false,
    isActive: false,
    specifications: [
      { standardFeature: "flowRate", value: "120", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "28", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "18", unit: "kW (24 HP)", isNumeric: true },
      { standardFeature: "suctionDepth", value: "7.5", unit: "m", isNumeric: true },
      { standardFeature: "solidsHandling", value: "50", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "چدن آلیاژی GG25 ضدسایش", isNumeric: false },
      { standardFeature: "sealType", value: "مکانیکال سیل کاربید سیلیسیم", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
    ],
  },

  // ── 14. Self-Priming Heavy Pump: 6-inch (In Stock) ──
  {
    title: "پمپ خودمکش ۶ اینچ دیزلی سنگین کارگاهی",
    slug: "self-priming-trash-pump-6-inch",
    category: "centrifugal",
    order: 140,
    shortDescription:
      "پمپ خودمکش ۶ اینچ دیزلی سنگین با دبی ۳۲۰ مترمکعب بر ساعت و هد ۳۵ متر، موتور دیزل موتورسازان، شاسی تقویت‌شده، موجود در انبار هزاره کالا.",
    fullDescriptionParagraphs: [
      "پمپ دیزلی ۶ اینچ خودمکش هزاره کالا طراحی‌شده برای عملیات سنگین آب‌اندازی، پروژه‌های انتقال آب شور و پساب کارخانجات پتروشیمی. مجهز به موتور دیزل موتورسازان تبریز با رادیاتور مداربسته و پروانه ضدگرفتگی با قابلیت عبور اجسام صلب تا ۷۶ میلی‌متر.",
      "دارای قابلیت مکش از عمق ۸ متری بدون نیاز به فوت‌ولو (Foot Valve) و کارکرد طولانی مدت در شرایط عملیاتی دشوار بیابانی و بنادر جنوب کشور.",
    ],
    metaTitle: "پمپ ۶ اینچ خودمکش دیزلی سنگین | هزاره کالا",
    metaDescription:
      "پمپ خودمکش دیزلی ۶ اینچ با دبی ۳۲۰ مترمکعب در ساعت، موتور موتورسازان، شاسی صلب و عبور جامدات ۷۶ میلی‌متر، موجود در انبار هزاره کالا.",
    isFeatured: true,
    isActive: false,
    specifications: [
      { standardFeature: "flowRate", value: "320", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "35", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "45", unit: "kW", isNumeric: true },
      { standardFeature: "suctionDepth", value: "8", unit: "m", isNumeric: true },
      { standardFeature: "solidsHandling", value: "76", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "چدن داکتیل GGG40", isNumeric: false },
      { standardFeature: "sealType", value: "مکانیکال سیل دابل کاربید تنگستن با روغن‌دان مستقل", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "موجود در انبار هزاره کالا (تحویل فوری)", isNumeric: false },
    ],
  },

  // ── 15. Heavy Flood Pump: 8-inch ──
  {
    title: "پمپ دیزلی خودمکش ۸ اینچ مدیریت سیلاب و تخلیه گل و لای",
    slug: "self-priming-trash-pump-8-inch",
    category: "centrifugal",
    order: 150,
    shortDescription:
      "پمپ پرقدرت خودمکش ۸ اینچ دیزلی با دبی ۶۵۰ مترمکعب بر ساعت مجهز به سیستم وکیوم پرایمینگ کمکی جهت مدیریت بحران سیلاب و زهکشی بنادر.",
    fullDescriptionParagraphs: [
      "سامانه پمپاژ پرتابل ۸ اینچ هزاره کالا دانش اروند، غول‌پیکرترین سامانه خودمکش شرکت جهت مقابله با سیلاب، زهکشی اراضی صنعتی، لایروبی حوضچه‌های آرامش و تخلیه حوضچه‌های خشک بنادر و اسکله‌های کشتیرانی است.",
      "این ایستگاه پمپاژ متحرک مجهز به موتور دیزل پرقدرت ۷۰ کیلووات موتورسازان تبریز، پمپ وکیوم کمکی با ظرفیت مکش هوا ۱۰۰ CFM، و پروانه چشم‌باز با قابلیت انتقال ذرات جامد تا قطر ۱۰۰ میلی‌متر می‌باشد.",
    ],
    metaTitle: "پمپ خودمکش ۸ اینچ دیزلی سیلاب و گل‌ولای | هزاره کالا",
    metaDescription:
      "پمپ دیزلی خودمکش ۸ اینچ با دبی ۶۵۰ مترمکعب در ساعت، موتور موتورسازان، سیستم وکیوم پرایمینگ و گذردهی ذرات ۱۰۰ میلی‌متر ساخت هزاره کالا.",
    isFeatured: true,
    isActive: false,
    specifications: [
      { standardFeature: "flowRate", value: "650", unit: "m³/h", isNumeric: true },
      { standardFeature: "head", value: "32", unit: "m", isNumeric: true },
      { standardFeature: "power", value: "70", unit: "kW", isNumeric: true },
      { standardFeature: "suctionDepth", value: "8.5", unit: "m", isNumeric: true },
      { standardFeature: "solidsHandling", value: "100", unit: "mm", isNumeric: true },
      { standardFeature: "casingMaterial", value: "حلزونی چدن آلیاژی ضدسایش", isNumeric: false },
      { standardFeature: "impellerMaterial", value: "پروانه چشم‌باز ضدسایش با گذردهی بالا", isNumeric: false },
      { standardFeature: "sealType", value: "سیل مکانیکال کاربید تنگستن غوطه‌ور در روغن", isNumeric: false },
      { standardFeature: "custom", customLabel: "سیستم پرایمینگ کمکی", value: "پمپ وکیوم با ظرفیت 100 CFM", isNumeric: false },
      { standardFeature: "custom", customLabel: "ظرفیت باک سوخت", value: "80", unit: "L", isNumeric: true },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },

  // ── 16. Wet Blast Unit ──
  {
    title: "دستگاه وت‌بلاست و آماده‌سازی سطح پرتابل بدون غبار",
    slug: "portable-wet-blast-unit",
    category: "other",
    order: 160,
    shortDescription:
      "سامانه سندبلاست مرطوب (وت‌بلاست) بدون گرد و غبار جهت رسوب‌زدایی، زنگ‌زدایی و آماده‌سازی سطح خطوط لوله، مخازن و سازه‌های دریایی نفت و گاز.",
    fullDescriptionParagraphs: [
      "سامانه وت‌بلاست پرتابل هزاره کالا، راهکاری مدرن و بدون غبار برای عملیات آماده‌سازی سطح، رنگ‌زدایی، زنگ‌زدایی و رسوب‌زدایی خطوط لوله و مخازن است.",
      "با ترکیب کنترل‌شده آب و ذرات ساینده، میزان پراکندگی ذرات معلق در هوا تا ۹۵ درصد نسبت به سندبلاست خشک سنتی کاهش یافته و از خطرات تنفسی و آلودگی محیط زیست جلوگیری می‌کند.",
      "مجهز به مخزن فولادی تحت فشار با گواهی استاندارد، شیرهای پنوماتیک ضدسایش و شاسی چرخ‌دار کارگاهی با مانورپذیری بالا.",
    ],
    metaTitle: "دستگاه وت‌بلاست بدون غبار پرتابل | هزاره کالا",
    metaDescription:
      "دستگاه وت‌بلاست پرتابل بدون غبار ساخت شرکت هزاره کالا دانش اروند مناسب سندبلاست مرطوب، رنگ‌زدایی و آماده‌سازی سطح مخازن نفت و گاز.",
    isFeatured: true,
    isActive: false,
    specifications: [
      { standardFeature: "maxPressure", value: "12", unit: "bar", isNumeric: true },
      { standardFeature: "casingMaterial", value: "مخزن فولادی تحت فشار با پوشش محافظ اپوکسی ضدخوردگی", isNumeric: false },
      { standardFeature: "custom", customLabel: "سیستم پاشش", value: "ترکیب آب و ذرات ساینده بدون ایجاد گرد و غبار", isNumeric: false },
      { standardFeature: "custom", customLabel: "نوع شاسی", value: "شاسی چرخ‌دار کارگاهی قابل‌حمل", isNumeric: false },
      { standardFeature: "custom", customLabel: "استاندارد آماده‌سازی سطح", value: "دستیابی به استاندارد Sa 2.5 و Sa 3", isNumeric: false },
      { standardFeature: "custom", customLabel: "وضعیت تأمین و تحویل", value: "قابل سفارش / ساخت سفارشی", isNumeric: false },
    ],
  },
];
