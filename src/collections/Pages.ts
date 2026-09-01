import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'صفحه',
    plural: 'صفحات',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'عنوان صفحه',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'اسلاگ',
      admin: {
        description: 'اسلاگ صفحه (مانند home, compare, about, products, projects, gallery, capabilities, contact, blog)',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'زیرعنوان (نمایش در هدر صفحه)',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر هدر صفحه',
    },
    {
      name: 'heroVideo',
      type: 'upload',
      relationTo: 'media',
      label: 'ویدیوی اصلی Hero (اختیاری - جایگزین کل اسلایدها)',
      admin: {
        description:
          'در صورت آپلود، اسلایدها نادیده گرفته می‌شوند و این ویدیو در پس‌زمینه پخش می‌شود. فرمت MP4، بدون صدا، ۱۰-۱۵ ثانیه.',
      },
    },
    {
      name: 'heroSlides',
      type: 'array',
      label: 'اسلایدهای Hero (در صورت نداشتن ویدیو)',
      admin: {
        description: 'فقط برای صفحه home کاربرد دارد',
        condition: (data: Record<string, unknown>) => !data?.heroVideo,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'تصویر (برای fallback و پوستر ویدیو)',
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'ویدیوی اسلاید (اختیاری - MP4، بدون صدا)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'عنوان اسلاید',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'محتوای صفحه',
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      label: 'منتشر شده',
      defaultValue: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'سئو (SEO)',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'عنوان سئو (Meta Title)',
              admin: {
                description: 'حداکثر ۶۰ کاراکتر. اگر خالی باشد، عنوان صفحه استفاده می‌شود.',
              },
              maxLength: 70,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'توضیحات سئو (Meta Description)',
              admin: {
                description: 'حداکثر ۱۶۰ کاراکتر. اگر خالی باشد، excerpt استفاده می‌شود.',
              },
              maxLength: 200,
            },
            {
              name: 'excerpt',
              type: 'textarea',
              label: 'خلاصه صفحه (برای SEO و پیش‌نمایش)',
              admin: {
                description: 'در metabox جستجو و کارت‌های اشتراک‌گذاری نمایش داده می‌شود.',
              },
              maxLength: 300,
            },
          ],
        },
        {
          label: 'درباره ما و کارخانه (About Us)',
          description: 'فیلدهای ساختاریافته اختصاصی برای ایستگاه‌های کاری، محوطه، اهداف و آمار صفحه درباره ما',
          admin: {
            condition: (data: Record<string, unknown>) =>
              data?.slug === 'about' || data?.slug === 'about-us',
          },
          fields: [
            {
              name: 'introSection',
              type: 'group',
              label: 'بخش معرفی، تاریخچه و تعهدات',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  label: 'متن برچسب کوچک بالای تیتر',
                  defaultValue: 'معرفی و تاریخچه',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'تیتر اصلی بخش معرفی',
                  defaultValue: 'تعهد به خودکفایی، دانش مهندسی و نوآوری صنعتی',
                },
                {
                  name: 'story',
                  type: 'richText',
                  label: 'متن کامل معرفی و تاریخچه شرکت (پاراگراف‌ها)',
                },
                {
                  name: 'highlights',
                  type: 'array',
                  label: 'برچسب‌های شاخص پایین متن (دارای تیک سبز)',
                  labels: {
                    singular: 'ویژگی شاخص',
                    plural: 'ویژگی‌های شاخص',
                  },
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      required: true,
                      label: 'متن ویژگی / تعهد',
                    },
                  ],
                },
              ],
            },
            {
              name: 'credentials',
              type: 'group',
              label: 'کارت شناسنامه و اطلاعات ثبتی شرکت (باکس مشکی سمت چپ)',
              fields: [
                {
                  name: 'boxTitle',
                  type: 'text',
                  label: 'عنوان کارت',
                  defaultValue: 'شناسنامه شرکت',
                },
                {
                  name: 'companyType',
                  type: 'text',
                  label: 'نوع شرکت (برچسب طلایی بالا)',
                  defaultValue: 'سهامی خاص',
                },
                {
                  name: 'registeredName',
                  type: 'text',
                  label: 'نام کامل ثبتی شرکت',
                  defaultValue: 'هزاره کالا دانش اروند',
                },
                {
                  name: 'registrationNumber',
                  type: 'text',
                  label: 'شماره ثبت',
                  defaultValue: '۷۴۱۵ (منطقه آزاد اروند)',
                },
                {
                  name: 'nationalId',
                  type: 'text',
                  label: 'شناسه ملی',
                  defaultValue: '۱۴۰۰۸۲۶۱۰۵۰',
                },
                {
                  name: 'economicCode',
                  type: 'text',
                  label: 'کد اقتصادی',
                  defaultValue: '۴۱۱۶۳۷۷۵۶۸۵۴',
                },
                {
                  name: 'ceo',
                  type: 'text',
                  label: 'نام مدیرعامل',
                  defaultValue: 'سیدمحمود دانش پور',
                },
                {
                  name: 'location',
                  type: 'text',
                  label: 'محل استقرار / نشانی',
                  defaultValue: 'شهرک صنعتی آبادان',
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  label: 'متن دکمه پایین شناسنامه',
                  defaultValue: 'درخواست مشاوره و بازدید از کارخانه',
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  label: 'لینک دکمه پایین شناسنامه',
                  defaultValue: '/contact',
                },
              ],
            },
            {
              name: 'stats',
              type: 'array',
              label: 'شاخص‌ها و آمار کلیدی شرکت',
              labels: {
                singular: 'شاخص',
                plural: 'شاخص‌ها',
              },
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  required: true,
                  label: 'مقدار شاخص (مثلاً: ۷+ یا API 610 یا ۱۰۰٪)',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'عنوان شاخص (مثلاً: سال سابقه تخصصی)',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'توضیح کوتاه زیر عنوان',
                },
              ],
            },
            {
              name: 'strategicGoals',
              type: 'array',
              label: 'اهداف راهبردی، چشم‌انداز و مأموریت',
              labels: {
                singular: 'هدف / بیانیه',
                plural: 'اهداف و بیانیه‌ها',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'عنوان (مثلاً: چشم‌انداز سازمانی / مأموریت ما)',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  label: 'متن بیانیه / توضیحات',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'نوع آیکون',
                  defaultValue: 'vision',
                  options: [
                    { label: '🎯 چشم‌انداز (Vision)', value: 'vision' },
                    { label: '🧭 مأموریت (Mission)', value: 'mission' },
                    { label: '🤝 ارزش‌ها و تعهد (Values)', value: 'values' },
                    { label: '🛡️ کیفیت و استاندارد (Quality)', value: 'quality' },
                  ],
                },
              ],
            },
            {
              name: 'workstations',
              type: 'array',
              label: 'ایستگاه‌های کاری و خطوط تولید کارخانه',
              labels: {
                singular: 'ایستگاه کاری',
                plural: 'ایستگاه‌های کاری',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'نام ایستگاه یا سالن کارگاه',
                  admin: {
                    placeholder: 'مثلاً: سالن ماشین‌کاری و تراش سنگین CNC',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  label: 'شرح فرآیند و قابلیت‌های فنی',
                },
                {
                  name: 'equipment',
                  type: 'text',
                  label: 'دستگاه‌ها و تجهیزات مستقر (اختیاری)',
                  admin: {
                    placeholder: 'مثلاً: دستگاه‌های تراش سنگین، فرز ۴ محوره CNC',
                  },
                },
                {
                  name: 'capacity',
                  type: 'text',
                  label: 'ظرفیت یا استانداردهای کاری (اختیاری)',
                  admin: {
                    placeholder: 'مثلاً: ماشین‌کاری قطعات تا قطر ۲۵۰۰ میلی‌متر',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'تصویر ایستگاه کاری یا دستگاه',
                },
                {
                  name: 'icon',
                  type: 'select',
                  label: 'نوع بخش',
                  defaultValue: 'machining',
                  options: [
                    { label: '⚙️ ماشین‌کاری و تراشکاری (Machining)', value: 'machining' },
                    { label: '🔬 تست هیدرولیک و عملکرد (Testing)', value: 'testing' },
                    { label: '⚖️ بالانس دینامیکی (Balancing)', value: 'balancing' },
                    { label: '🛡️ کنترل کیفیت و بازرسی NDT (QC)', value: 'qc' },
                    { label: '🔩 مونتاژ و پکینگ (Assembly)', value: 'assembly' },
                    { label: '📐 طراحی و مهندسی (Engineering)', value: 'engineering' },
                    { label: '🏭 عمومی کارخانه (Facility)', value: 'facility' },
                  ],
                },
              ],
            },
            {
              name: 'companyGrounds',
              type: 'array',
              label: 'گالری محوطه، ساختمان و فضای کارخانه',
              labels: {
                singular: 'تصویر محوطه',
                plural: 'تصاویر محوطه کارخانه',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'عنوان تصویر',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'تصویر محوطه / ساختمان',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'توضیح کوتاه',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
