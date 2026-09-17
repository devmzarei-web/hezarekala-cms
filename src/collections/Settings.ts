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
      name: "headerNavItems",
      type: "array",
      label: "منوی اصلی هدر (Header Navigation)",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "عنوان لینک",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "آدرس لینک (مثلاً: /products)",
        },
        {
          name: "isExternal",
          type: "checkbox",
          label: "باز شدن در تب جدید (لینک خارجی)",
          defaultValue: false,
        },
      ],
    },
    {
      name: "headerCtaText",
      type: "text",
      label: "متن دکمه اصلی هدر (CTA)",
      defaultValue: "درخواست مشاوره",
    },
    {
      name: "headerCtaLink",
      type: "text",
      label: "لینک دکمه اصلی هدر (CTA)",
      defaultValue: "/contact",
    },
    {
      name: "footerQuickLinks",
      type: "array",
      label: "لینک‌های دسترسی سریع فوتر (Quick Links)",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "عنوان لینک",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "آدرس لینک",
        },
      ],
    },
    {
      name: "footerProductLinks",
      type: "array",
      label: "لینک‌های محصولات فوتر (Product Links)",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          label: "عنوان لینک",
        },
        {
          name: "href",
          type: "text",
          required: true,
          label: "آدرس لینک",
        },
      ],
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
