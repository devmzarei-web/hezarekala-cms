import type { CollectionConfig } from 'payload'

export const HomeSections: CollectionConfig = {
  slug: 'home-sections',
  labels: {
    singular: 'بخش صفحه اصلی',
    plural: 'بخش‌های صفحه اصلی',
  },
  admin: {
    group: 'محتوا',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'عنوان بخش (تک خطی)',
      admin: {
        description: 'مثلاً: انتخابی هوشمندانه برای صنعت شما',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'زیرعنوان (اختیاری)',
    },
    {
      name: 'sectionKey',
      type: 'select',
      required: true,
      unique: true,
      label: 'کلید بخش',
      options: [
        { label: 'چرا ما (Why Us)', value: 'why-us' },
        { label: 'توانمندی‌ها (Capabilities)', value: 'capabilities' },
        { label: 'فرآیند ساخت (Process)', value: 'process' },
      ],
    },
    {
      name: 'theme',
      type: 'select',
      required: true,
      label: 'رنگ تم',
      defaultValue: 'dark',
      options: [
        { label: 'تیره (Dark Navy)', value: 'dark' },
        { label: 'روشن (White)', value: 'light' },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر پس‌زمینه (اختیاری)',
      admin: {
        description: 'برای بخش‌هایی که نیاز به تصویر پس‌زمینه دارند',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'فعال',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'ترتیب نمایش',
      defaultValue: 0,
    },
    // Why Us fields
    {
      name: 'whyUsCards',
      type: 'array',
      label: 'کارت‌های Why Us',
      admin: {
        condition: (_data: Record<string, unknown>, siblingData: Record<string, unknown>) => {
          return siblingData?.sectionKey === 'why-us'
        },
      },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'عنوان' },
        { name: 'description', type: 'textarea', required: true, label: 'توضیح' },
        {
          name: 'icon',
          type: 'select',
          label: 'آیکون',
          options: [
            { label: '⚙️ مهندسی', value: 'engineering' },
            { label: '🎯 کیفیت', value: 'quality' },
            { label: '⏱️ سرعت', value: 'speed' },
            { label: '🤝 پشتیبانی', value: 'support' },
          ],
        },
      ],
    },
    // Capabilities fields
    {
      name: 'capabilityItems',
      type: 'array',
      label: 'توانمندی‌ها',
      admin: {
        condition: (_data: Record<string, unknown>, siblingData: Record<string, unknown>) => {
          return siblingData?.sectionKey === 'capabilities'
        },
      },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'عنوان' },
        { name: 'description', type: 'textarea', required: true, label: 'توضیح' },
        {
          name: 'icon',
          type: 'select',
          label: 'آیکون',
          options: [
            { label: '⚙️ طراحی', value: 'design' },
            { label: '🔩 ساخت', value: 'manufacturing' },
            { label: '📊 تست', value: 'testing' },
            { label: '✅ کیفیت', value: 'quality-ctrl' },
            { label: '🚀 نصب', value: 'installation' },
            { label: '🔧 خدمات', value: 'service' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'سایز کارت در Bento Grid',
          options: [
            { label: 'عادی', value: 'normal' },
            { label: 'بزرگ (۲ برابر)', value: 'large' },
            { label: 'بلند', value: 'tall' },
          ],
          defaultValue: 'normal',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'تصویر پس‌زمینه کارت (اختیاری)',
        },
      ],
    },
    // Process fields
    {
      name: 'processSteps',
      type: 'array',
      label: 'مراحل فرآیند ساخت',
      admin: {
        condition: (_data: Record<string, unknown>, siblingData: Record<string, unknown>) => {
          return siblingData?.sectionKey === 'process'
        },
      },
      fields: [
        { name: 'title', type: 'text', required: true, label: 'عنوان مرحله' },
        { name: 'description', type: 'textarea', required: true, label: 'توضیح' },
        { name: 'stepNumber', type: 'number', required: true, label: 'شماره مرحله' },
        {
          name: 'icon',
          type: 'select',
          label: 'آیکون',
          options: [
            { label: '📋 تحلیل', value: 'analysis' },
            { label: '✏️ طراحی', value: 'design' },
            { label: '🏗️ ساخت', value: 'build' },
            { label: '🔬 تست', value: 'test' },
            { label: '📦 تحویل', value: 'deliver' },
          ],
        },
        { name: 'duration', type: 'text', label: 'مدت زمان (اختیاری)' },
      ],
    },
  ],
}
