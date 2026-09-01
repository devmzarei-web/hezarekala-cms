import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'مقاله',
    plural: 'مقالات',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'عنوان مقاله',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'اسلاگ',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'خلاصه مقاله',
      maxLength: 300,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر شاخص',
    },
    {
      name: 'author',
      type: 'text',
      label: 'نویسنده',
    },
    {
      name: 'category',
      type: 'select',
      label: 'دسته‌بندی',
      options: [
        { label: 'پمپ‌های سانتریفیوژ', value: 'centrifugal' },
        { label: 'پمپ‌های پیستونی', value: 'piston' },
        { label: 'پمپ‌های دنده‌ای', value: 'gear' },
        { label: 'نگهداری و تعمیرات', value: 'maintenance' },
        { label: 'اخبار شرکت', value: 'news' },
        { label: 'مقالات فنی', value: 'technical' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'محتوای مقاله',
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      label: 'منتشر شده',
      defaultValue: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'تاریخ انتشار',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
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
                description: 'حداکثر ۶۰ کاراکتر. اگر خالی باشد، عنوان مقاله استفاده می‌شود.',
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
              name: 'keywords',
              type: 'text',
              label: 'کلمات کلیدی (با کاما جدا کنید)',
            },
          ],
        },
      ],
    },
  ],
}
