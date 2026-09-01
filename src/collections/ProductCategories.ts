import type { Access, CollectionConfig } from "payload";

const adminOnly: Access = ({ req }) => Boolean(req.user);

const activeOrAdmin: Access = ({ req }) => {
  if (req.user) return true;

  return {
    isActive: {
      equals: true,
    },
  };
};

export const ProductCategories: CollectionConfig = {
  slug: "product-categories",
  labels: {
    singular: "دسته‌بندی محصول",
    plural: "دسته‌بندی محصولات",
  },
  admin: {
    group: "محصولات و پروژه‌ها",
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "isActive", "order", "updatedAt"],
    listSearchableFields: ["title", "slug", "description"],
    description: "دسته‌بندی‌های محصولات از این بخش مدیریت می‌شوند.",
  },
  access: {
    read: activeOrAdmin,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "اطلاعات دسته‌بندی",
          description: "نام و توضیحات دسته‌بندی محصول را وارد کنید.",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              label: "نام دسته‌بندی",
              admin: {
                placeholder: "مثلاً: پمپ سانتریفیوژ",
              },
            },
            {
              name: "slug",
              type: "text",
              required: true,
              unique: true,
              label: "شناسه انگلیسی",
              admin: {
                description: "فقط انگلیسی و بدون فاصله. مثال: centrifugal",
                placeholder: "centrifugal",
              },
            },
            {
              name: "description",
              type: "textarea",
              label: "توضیح کوتاه",
              maxLength: 300,
              admin: {
                description: "اختیاری. برای توضیح داخلی یا استفاده‌های بعدی در سایت.",
              },
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "تصویر دسته‌بندی",
              admin: {
                description: "اختیاری. برای توسعه‌های بعدی سایت.",
              },
            },
          ],
        },
        {
          label: "نمایش",
          fields: [
            {
              name: "isActive",
              type: "checkbox",
              label: "فعال و قابل نمایش",
              defaultValue: true,
            },
            {
              name: "order",
              type: "number",
              label: "ترتیب نمایش",
              defaultValue: 0,
            },
          ],
        },
      ],
    },
  ],
};
