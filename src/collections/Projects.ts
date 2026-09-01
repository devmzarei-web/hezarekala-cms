import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'پروژه',
    plural: 'پروژه‌ها',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'نام پروژه',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'اسلاگ',
    },
    {
      name: 'client',
      type: 'text',
      label: 'کارفرما',
    },
    {
      name: 'location',
      type: 'text',
      label: 'موقعیت',
    },
    {
      name: 'completionDate',
      type: 'text', // ← text به جای date
      label: 'تاریخ تکمیل (شمسی)',
      admin: {
        description: 'مثلاً: ۱۴۰۲/۰۶/۱۵',
        placeholder: '۱۴۰۲/۰۶/۱۵',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'توضیح کوتاه',
      maxLength: 300,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر شاخص',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'نمایش در صفحه اصلی',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'ترتیب نمایش',
      defaultValue: 0,
    },
  ],
}
