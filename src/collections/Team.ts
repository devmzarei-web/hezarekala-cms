import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'عضو',
    plural: 'اعضای هیئت مدیره',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'نام و نام خانوادگی',
    },
    {
      name: 'position',
      type: 'text',
      required: true,
      label: 'سمت',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'بیوگرافی کوتاه',
      maxLength: 200,
    },
    {
      name: 'linkedin',
      type: 'text',
      label: 'لینکدین (آدرس)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'ترتیب نمایش',
      defaultValue: 0,
    },
  ],
}
