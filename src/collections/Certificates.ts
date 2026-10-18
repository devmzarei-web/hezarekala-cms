import type { CollectionConfig } from 'payload'

export const Certificates: CollectionConfig = {
  slug: 'certificates',
  labels: {
    singular: 'گواهینامه',
    plural: 'گواهینامه‌ها و استانداردها',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'standard', 'registrationNumber', 'order', 'isActive', 'isFeaturedHome'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'عنوان فارسی گواهینامه',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'زیرعنوان / معرفی مختصر',
    },
    {
      name: 'standard',
      type: 'text',
      required: true,
      label: 'کد استاندارد (مثال: ISO 45001:2018)',
    },
    {
      name: 'issuingAuthority',
      type: 'text',
      label: 'مرجع صادرکننده / ممیزی',
      defaultValue: 'QAL UK / Quality Assessment Lia',
    },
    {
      name: 'registrationNumber',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'شماره ثبت بین‌المللی (Registration No)',
    },
    {
      name: 'issueDate',
      type: 'text',
      label: 'تاریخ صدور / اعتبار',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'توضیحات فنی و دامنه کاربرد (Scope)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'تصویر باکیفیت سند گواهینامه',
    },
    {
      name: 'order',
      type: 'number',
      label: 'ترتیب نمایش (صعودی)',
      defaultValue: 0,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'فعال / انتشار عمومی',
      defaultValue: true,
    },
    {
      name: 'isFeaturedHome',
      type: 'checkbox',
      label: 'نمایش در کروسل صفحه اصلی',
      defaultValue: true,
    },
  ],
}
