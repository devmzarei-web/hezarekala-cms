import type { CollectionConfig } from "payload";

export const Settings: CollectionConfig = {
  slug: "settings",
  labels: {
    singular: "تنظیمات",
    plural: "تنظیمات",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      label: "نام سایت",
    },
    {
      name: "phone",
      type: "text",
      label: "تلفن",
    },
    {
      name: "email",
      type: "text",
      label: "ایمیل",
    },
    {
      name: "address",
      type: "textarea",
      label: "آدرس",
    },
    {
      name: "aboutText",
      type: "textarea",
      label: "متن درباره ما",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "لوگوی اصلی",
    },
    {
      name: "logoDark",
      type: "upload",
      relationTo: "media",
      label: "لوگو برای پس‌زمینه تیره",
    },
    {
      name: "certificates",
      type: "array",
      label: "لوگوهای اعتماد (اینماد، ساماندهی و ...)",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "تصویر",
        },
        {
          name: "title",
          type: "text",
          label: "عنوان (مثلاً: اینماد)",
        },
        {
          name: "link",
          type: "text",
          label: "لینک (اختیاری)",
        },
      ],
    },
  ],
};