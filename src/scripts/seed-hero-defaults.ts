import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.production') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export async function seedHeroDefaults() {
  console.log('==================================================');
  console.log('🚀 شروع به‌روزرسانی اطلاعات پیش‌فرض اسلایدهای Hero صفحه خانه');
  console.log('==================================================');

  const { getPayload } = await import('payload');
  const configModule = await import('../payload.config');
  const config = configModule.default;
  const payload = await getPayload({ config });

  // ۱. یافتن صفحه home
  const existingPage = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    depth: 0,
  });

  if (!existingPage || existingPage.docs.length === 0) {
    console.log('⚠️ صفحه با اسلاگ home یافت نشد.');
    return;
  }

  const homeDoc = existingPage.docs[0];
  const existingSlides = (homeDoc.heroSlides as any[]) || [];

  console.log('تعداد اسلایدهای موجود:', existingSlides.length);

  const defaultCopies = [
    {
      badge: 'بیش از ۷ سال تجربه در صنعت پمپ‌سازی',
      titleLine1: 'طراحی و ساخت',
      titleHighlight: 'پمپ‌های صنعتی بزرگ',
      titleLine3: 'برای حیاتی‌ترین صنایع ایران',
      description:
        'هزاره کالا با تکیه بر دانش فنی پیشرفته، تیم مهندسی متخصص و تجهیزات مدرن، پمپ‌های سانتریفیوژ، پیستونی، خودمکش و دنده‌ای را برای صنایع نفت، گاز، پتروشیمی و نیروگاهی تولید می‌کند.',
      primaryCtaText: 'مشاهده محصولات',
      primaryCtaLink: '/products',
      secondaryCtaText: 'درخواست مشاوره',
      secondaryCtaLink: '/contact',
    },
    {
      badge: 'تجهیزات سنگین و پیشرفته کارخانه آبادان',
      titleLine1: 'ماشین‌کاری فوق‌سنگین CNC',
      titleHighlight: 'تراشکاری قطعات تا ۲۰ تن و طول ۶ متر',
      titleLine3: 'با بالاترین دقت و استانداردهای صنعتی',
      description:
        'کارگاه تخصصی ماشین‌کاری با دستگاه‌های سنگین‌تراش تا قطر ۱.۸ متر، فرز ۴ محوره CNC تا ۱۲ تن، وایرکات و سوراخ‌کاری رادیال با بازوی ۴ متر.',
      primaryCtaText: 'مشاهده توانمندی‌ها',
      primaryCtaLink: '/capabilities',
      secondaryCtaText: 'مشاوره مهندسی',
      secondaryCtaLink: '/contact',
    },
    {
      badge: 'واحد مبدل‌شاپ و ژنراتورهای صنعتی',
      titleLine1: 'ساخت و اورهال مبدل‌های حرارتی',
      titleHighlight: 'و پکیج‌های دیزل ژنراتور موتورسازان',
      titleLine3: 'توان ۲۵ الی ۱۵۰ کاوا با تحویل فوری',
      description:
        'طراحی و ریتوب مبدل‌های پوسته و لوله، نورد ورق تا ضخامت ۶۰ میلی‌متر، ساخت مخازن تحت فشار و عرضه انواع دیزل ژنراتور و موتورهای صنعتی موتورسازان تبریز.',
      primaryCtaText: 'درخواست استعلام قیمت',
      primaryCtaLink: '/contact',
      secondaryCtaText: 'کاتالوگ توانمندی‌ها',
      secondaryCtaLink: '/capabilities',
    },
  ];

  // به‌روزرسانی فیلدهای متن اسلایدها بدون حذف تصویر یا ویدیوی قبلی
  const updatedSlides = existingSlides.map((slide, idx) => {
    const copy = defaultCopies[idx] || defaultCopies[0];
    return {
      ...slide,
      badge: slide.badge || copy.badge,
      titleLine1: slide.titleLine1 || copy.titleLine1,
      titleHighlight: slide.titleHighlight || copy.titleHighlight,
      titleLine3: slide.titleLine3 || copy.titleLine3,
      description: slide.description || copy.description,
      primaryCtaText: slide.primaryCtaText || copy.primaryCtaText,
      primaryCtaLink: slide.primaryCtaLink || copy.primaryCtaLink,
      secondaryCtaText: slide.secondaryCtaText || copy.secondaryCtaText,
      secondaryCtaLink: slide.secondaryCtaLink || copy.secondaryCtaLink,
    };
  });

  // فیلدهای پیش‌فرض برای ویدیوی تکی در صورت فعال شدن
  const defaultVideoContent = {
    badge: 'تولید ملی با دانش مهندسی و نوآوری صنعتی',
    titleLine1: 'طراحی، ساخت و مهندسی معکوس',
    titleHighlight: 'تجهیزات استراتژیک صنایع نفت، گاز و پتروشیمی',
    titleLine3: 'در کارخانه مجهز آبادان - منطقه آزاد اروند',
    description:
      'شرکت هزاره کالا دانش اروند؛ پیشرو در تولید پمپ‌های صنعتی بزرگ، ماشین‌کاری قطعات سنگین تا ۲۰ تن، ساخت مبدل‌های حرارتی و بسته‌بندی دیزل‌ژنراتورهای موتورسازان.',
    primaryCtaText: 'مشاهده توانمندی‌ها',
    primaryCtaLink: '/capabilities',
    secondaryCtaText: 'درخواست مشاوره و استعلام',
    secondaryCtaLink: '/contact',
  };

  await payload.update({
    collection: 'pages',
    id: homeDoc.id,
    data: {
      heroSlides: updatedSlides,
      heroVideoContent: (homeDoc as any).heroVideoContent || defaultVideoContent,
    },
  });

  console.log('✅ اسلایدهای Hero صفحه خانه با موفقیت به‌روزرسانی شدند.');
}

if (process.argv[1] && process.argv[1].replace(/\\/g, '/').includes('seed-hero-defaults.ts')) {
  seedHeroDefaults()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌ خطا در به‌روزرسانی اسلایدهای Hero:', err);
      process.exit(1);
    });
}
