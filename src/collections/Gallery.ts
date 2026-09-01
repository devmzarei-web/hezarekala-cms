import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'تصویر',
    plural: 'گالری',
  },
  access: {
    read: () => true,
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
      label: 'تصویر',
    },
    {
      name: 'category',
      type: 'select',
      label: 'دسته‌بندی',
      options: [
        { label: 'کارگاه', value: 'workshop' },
        { label: 'محصولات', value: 'products' },
        { label: 'پروژه‌ها', value: 'projects' },
        { label: 'تیم', value: 'team' },
        { label: 'سایر', value: 'other' },
      ],
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
