import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export async function seedCapabilitiesPage() {
  console.log("==================================================");
  console.log("🏭 شروع همگام‌سازی اطلاعات صفحه توانمندی‌ها (Capabilities) در CMS");
  console.log("==================================================");

  const { getPayload } = await import("payload");
  const configModule = await import("../payload.config");
  const config = configModule.default;
  const payload = await getPayload({ config });

  // ۱. همگام‌سازی سند صفحه capabilities در کالکشن Pages
  const existingPage = await payload.find({
    collection: "pages",
    where: { slug: { equals: "capabilities" } },
    limit: 1,
    depth: 0,
  });

  const pageData = {
    title: "توانمندی‌ها و ماشین‌شاپ صنعتی",
    slug: "capabilities",
    subtitle: "از مهندسی دقیق و شبیه‌سازی تا ساخت قطعات فوق‌سنگین و تست نهایی",
    isPublished: true,
    metaTitle: "توانمندی‌های مهندسی و ماشین‌شاپ صنعتی | هزاره کالا",
    metaDescription:
      "مرکز ماشین‌کاری سنگین ۲۰ تن، نورد ورق تا ۶۰ میلی‌متر، ساخت مبدل، پمپ، اورهال ولو و وت‌بلاست در کارخانه آبادان شرکت هزاره کالا دانش اروند.",
    capabilitiesIntro: {
      badge: "واحدهای عملیاتی و تجهیزات سنگین کارخانه آبادان",
      title: "۷ واحد تخصصی مهندسی و ماشین‌شاپ صنعتی",
    },
    plantHighlight: {
      hydrostaticStandard: "ASME Sec VIII / API 610 / API 598",
      rollingCapacity: "تا ضخامت ۶۰ میلی‌متر (نورد ۴ غلطکه)",
      maxCraneCapacity: "۲۰ تن در سالن اصلی ساخت",
      powerGenerator: "۴۰۰ کاوا مستقل کارخانه‌ای",
    },
  };

  if (existingPage.docs.length > 0) {
    const docId = existingPage.docs[0].id;
    await payload.update({
      collection: "pages",
      id: docId,
      data: pageData as any,
    });
    console.log(`[به‌روزرسانی] سند صفحه توانمندی‌ها (ID: ${docId}) با موفقیت به‌روزرسانی شد.`);
  } else {
    const created = await payload.create({
      collection: "pages",
      data: pageData as any,
    });
    console.log(`[ایجاد جدید] سند صفحه توانمندی‌ها (ID: ${created.id}) با موفقیت ایجاد شد.`);
  }

  // ۲. همگام‌سازی بخش توانمندی‌های صفحه اصلی در کالکشن HomeSections
  console.log("--------------------------------------------------");
  console.log("🏢 همگام‌سازی بخش هفت‌گانه در HomeSections (صفحه اصلی)...");

  const existingHomeSection = await payload.find({
    collection: "home-sections",
    where: { sectionKey: { equals: "capabilities" } },
    limit: 1,
    depth: 0,
  });

  const capabilityItems = [
    {
      title: "مبدل شاپ و تجهیزات فرآیندی",
      description: "ساخت، تعمیر، تعویض باندل و اکسپندینگ لوله‌ها تا قطر ۶۰ میلی‌متر با واترجت و تست هیدرواستاتیک",
      icon: "manufacturing",
      size: "large",
    },
    {
      title: "ماشین‌کاری سنگین و تراشکاری CNC",
      description: "تراش ۶ متری با ظرفیت ۲۰ تن، فرز دروازه‌ای CNC مدل KF3000 اسپانیا تا ۱۲ تن و وایرکات دقیق",
      icon: "manufacturing",
      size: "large",
    },
    {
      title: "آهنگری، برش و فرم‌دهی فلزات",
      description: "نورد ۴ غلطکه سنگین تا ضخامت ۶۰ میلی‌متر، برش لیزر فایبر ۶kW، پرس برک ۳۲۰ تن و پانچ ۶۰ تن",
      icon: "manufacturing",
      size: "tall",
    },
    {
      title: "پمپ شاپ صنعتی و پکیج‌های پرتابل",
      description: "ساخت پمپ‌های خودمکش، پکیج‌های دیزلی، تعمیر پمپ‌های فرآیندی و بنچ تست عملکردی هیدرولیک",
      icon: "testing",
      size: "normal",
    },
    {
      title: "شیرآلات صنعتی و ولو (Valve Shop)",
      description: "اورهال، لپینگ و تست هیدرواستاتیک و نشتی‌سنجی انواع ولوهای نفت و گاز طبق API 598",
      icon: "service",
      size: "normal",
    },
    {
      title: "جوشکاری و اتصال تخصصی",
      description: "جوشکاری لیزر، TIG (آرگون)، SMAW و MIG/MAG و روکش‌کاری سخت قطعات مقاوم در برابر سایش",
      icon: "quality-ctrl",
      size: "normal",
    },
    {
      title: "آماده‌سازی سطح، وت‌بلاست و رنگ",
      description: "زنگ‌زدایی لیزری، سامانه وت‌بلاست بدون غبار، سندبلاست و اعمال پوشش اپوکسی در اتاق رنگ",
      icon: "service",
      size: "normal",
    },
  ];

  if (existingHomeSection.docs.length > 0) {
    const docId = existingHomeSection.docs[0].id;
    await payload.update({
      collection: "home-sections",
      id: docId,
      data: {
        title: "واحدهای مهندسی و ماشین‌شاپ کارخانه",
        subtitle: "۷ دپارتمان تخصصی ساخت، نورد، ماشین‌کاری فوق‌سنگین و تست هیدرواستاتیک در آبادان",
        theme: "light",
        isActive: true,
        order: 4,
        capabilityItems,
      } as any,
    });
    console.log(`[به‌روزرسانی] بخش capabilities در HomeSections به‌روزرسانی شد.`);
  } else {
    await payload.create({
      collection: "home-sections",
      data: {
        sectionKey: "capabilities",
        title: "واحدهای مهندسی و ماشین‌شاپ کارخانه",
        subtitle: "۷ دپارتمان تخصصی ساخت، نورد، ماشین‌کاری فوق‌سنگین و تست هیدرواستاتیک در آبادان",
        theme: "light",
        isActive: true,
        order: 4,
        capabilityItems,
      } as any,
    });
    console.log(`[ایجاد جدید] بخش capabilities در HomeSections ایجاد شد.`);
  }

  console.log("==================================================");
  console.log("✅ همگام‌سازی صفحه توانمندی‌ها و بخش صفحه اصلی با موفقیت انجام شد.");
  console.log("==================================================");
}

if (process.argv[1] && process.argv[1].replace(/\\/g, "/").includes("seed-capabilities-data.ts")) {
  seedCapabilitiesPage()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("خطا در همگام‌سازی صفحه توانمندی‌ها:", err);
      process.exit(1);
    });
}
