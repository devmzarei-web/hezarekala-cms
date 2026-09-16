import type { CollectionConfig } from "payload";

const DEFAULT_TITLES: Record<string, string> = {
  centrifugal: "پمپ سانتریفیوژ و خودمکش",
  gear: "پمپ دنده‌ای و غلیظ‌کش",
  other: "وت‌بلاست و آماده‌سازی سطح",
  generators: "دیزل ژنراتور و موتور دیزلی",
  "sludge-pumps": "پمپ لجن‌کش و خودمکش",
  "gear-pumps": "پمپ دنده‌ای پرتابل",
  piston: "پمپ پیستونی",
  multistage: "پمپ طبقاتی",
  machining: "خدمات ماشین‌کاری سنگین",
};

const resolveCategorySlug = async ({ doc, req }: any) => {
  if (!doc) return doc;

  let rawVal = doc.category;
  if (typeof rawVal === "object" && rawVal !== null) {
    rawVal = rawVal.id || rawVal.slug;
  }

  if (typeof rawVal === "string" && rawVal.length > 0 && !/^[0-9a-fA-F]{24}$/.test(rawVal)) {
    try {
      const cat = await req.payload.find({
        collection: "product-categories",
        where: { slug: { equals: rawVal } },
        limit: 1,
        depth: 0,
      });

      if (cat.docs.length > 0) {
        doc.category = cat.docs[0];
      } else {
        const title = DEFAULT_TITLES[rawVal] || rawVal;
        const newCat = await req.payload.create({
          collection: "product-categories",
          data: {
            title,
            slug: rawVal,
            isActive: true,
            order: 0,
          },
        });
        doc.category = newCat;
      }
    } catch (e) {
      // ignore
    }
  }
  return doc;
};

const resolveCategoryBeforeChange = async ({ data, req }: any) => {
  if (!data) return data;

  let rawVal = data.category;
  if (typeof rawVal === "object" && rawVal !== null) {
    rawVal = rawVal.id || rawVal.slug;
  }

  if (typeof rawVal === "string" && rawVal.length > 0 && !/^[0-9a-fA-F]{24}$/.test(rawVal)) {
    try {
      const cat = await req.payload.find({
        collection: "product-categories",
        where: { slug: { equals: rawVal } },
        limit: 1,
        depth: 0,
      });

      if (cat.docs.length > 0) {
        data.category = cat.docs[0].id;
      } else {
        const title = DEFAULT_TITLES[rawVal] || rawVal;
        const newCat = await req.payload.create({
          collection: "product-categories",
          data: {
            title,
            slug: rawVal,
            isActive: true,
            order: 0,
          },
        });
        data.category = newCat.id;
      }
    } catch (e) {
      // ignore
    }
  }
  return data;
};

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "محصول",
    plural: "محصولات",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "category", "isActive", "isFeatured", "order"],
    group: "محصولات و پروژه‌ها",
    description: "مدیریت کاتالوگ محصولات صنعتی، دیزل ژنراتورها، پمپ‌ها و تجهیزات",
  },
  hooks: {
    afterRead: [resolveCategorySlug],
    beforeChange: [resolveCategoryBeforeChange],
  },
  fields: [
    /* ── بخش اطلاعات اصلی ── */
    {
      name: "title",
      type: "text",
      required: true,
      label: "نام محصول",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "اسلاگ (آدرس URL)",
      admin: {
        description: "مثلاً: centrifugal-pump-500",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "product-categories",
      hasMany: false,
      label: "دسته‌بندی",
      admin: {
        description: "دسته‌بندی اصلی محصول را انتخاب کنید.",
      },
    },

    /* ── بخش تصاویر ── */
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "تصویر شاخص",
    },
    {
      name: "gallery",
      type: "array",
      label: "گالری تصاویر",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "تصویر",
        },
      ],
    },

    /* ── بخش محتوا ── */
    {
      name: "shortDescription",
      type: "textarea",
      label: "توضیح کوتاه (برای کارت محصول)",
      admin: {
        description: "حداکثر ۱۶۰ کاراکتر. در صفحه اصلی و نتایج جستجو نمایش داده می‌شود.",
      },
      maxLength: 300,
    },
    {
      name: "fullDescription",
      type: "richText",
      label: "توضیحات کامل",
    },
    {
      name: "specifications",
      type: "array",
      label: "مشخصات فنی و پارامترهای مقایسه",
      labels: {
        singular: "مشخصه فنی",
        plural: "مشخصات فنی",
      },
      fields: [
        {
          name: "standardFeature",
          type: "select",
          label: "انتخاب مشخصه استاندارد",
          defaultValue: "flowRate",
          options: [
            { label: "دبی نامی / کاری (Flow Rate)", value: "flowRate" },
            { label: "هد ماکزیمم (Head)", value: "head" },
            { label: "توان الکتروموتور / محرک (Power)", value: "power" },
            { label: "توان نامی دیزل ژنراتور (Nominal Rating / KVA)", value: "kva" },
            { label: "مدل موتور دیزل (Diesel Engine Model)", value: "engineModel" },
            { label: "سیستم خنک‌کننده (Cooling System)", value: "coolingType" },
            { label: "عمق مکش مجاز (Max Suction Depth)", value: "suctionDepth" },
            { label: "حداکثر قطر عبور ذرات جامد (Max Solids Passage)", value: "solidsHandling" },
            { label: "ابعاد میز کارگیر (Table / Working Size)", value: "tableSize" },
            { label: "دور موتور (Speed / RPM)", value: "speed" },
            { label: "استاندارد ساخت (Standard)", value: "standard" },
            { label: "متریال پروانه (Impeller Material)", value: "impellerMaterial" },
            { label: "متریال پوسته / شاسی (Casing/Frame Material)", value: "casingMaterial" },
            { label: "متریال شفت (Shaft Material)", value: "shaftMaterial" },
            { label: "نوع آب‌بندی (Sealing Type)", value: "sealType" },
            { label: "حداکثر دمای کاری (Max Temp)", value: "maxTemp" },
            { label: "حداکثر فشار کاری (Max Pressure)", value: "maxPressure" },
            { label: "کلاس و استاندارد فلنج (Flange Rating)", value: "flangeRating" },
            { label: "وزن دستگاه (Weight)", value: "weight" },
            { label: "سایر / مشخصه جدید دلخواه (Custom)", value: "custom" },
          ],
        },
        {
          name: "customLabel",
          type: "text",
          label: "عنوان مشخصه دلخواه (در صورت انتخاب گزینه سایر)",
          admin: {
            condition: (_data, siblingData) => siblingData?.standardFeature === "custom",
            placeholder: "مثلاً: نوع کوپلینگ یا ضریب اطمینان",
          },
        },
        {
          name: "label",
          type: "text",
          label: "عنوان نمایشی (اختیاری - در صورت خالی بودن عنوان استاندارد استفاده می‌شود)",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "مقدار",
          admin: {
            placeholder: "مثلاً: 250 یا استنلس استیل 316L",
          },
        },
        {
          name: "unit",
          type: "text",
          label: "واحد سنجش (اختیاری)",
          admin: {
            placeholder: "مثلاً: m³/h یا m یا kW یا RPM یا bar یا °C",
          },
        },
        {
          name: "isNumeric",
          type: "checkbox",
          label: "محاسبه تفاضل عددی در مقایسه محصولات",
          defaultValue: true,
        },
      ],
    },

    /* ── بخش اسناد و کاتالوگ‌های پیوست ── */
    {
      name: "documents",
      type: "array",
      label: "کاتالوگ‌ها و اسناد فنی پیوست (PDF)",
      labels: {
        singular: "سند فنی",
        plural: "اسناد فنی",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "عنوان سند (مثلاً: کاتالوگ دیزل ژنراتور ۴۵ کاوا)",
        },
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "فایل کاتالوگ / بروشور (PDF)",
        },
      ],
    },

    /* ── بخش SEO ── */
    {
      type: "tabs",
      tabs: [
        {
          label: "سئو (SEO)",
          fields: [
            {
              name: "metaTitle",
              type: "text",
              label: "عنوان سئو (Meta Title)",
              admin: {
                description: "اگه خالی باشه، نام محصول استفاده میشه. حداکثر ۶۰ کاراکتر.",
              },
              maxLength: 70,
            },
            {
              name: "metaDescription",
              type: "textarea",
              label: "توضیحات سئو (Meta Description)",
              admin: {
                description: "اگه خالی باشه، توضیح کوتاه استفاده میشه. حداکثر ۱۶۰ کاراکتر.",
              },
              maxLength: 200,
            },
            {
              name: "keywords",
              type: "text",
              label: "کلمات کلیدی (با کاما جدا کنید)",
              admin: {
                description: "مثلاً: پمپ سانتریفیوژ, پمپ فشار قوی, پمپ نفت و گاز, هزاره کالا",
              },
            },
            {
              name: "canonicalUrl",
              type: "text",
              label: "آدرس Canonical (اختیاری)",
              admin: {
                description: "اگه این محصول از یه صفحه دیگه کپی شده، آدرس صفحه اصلی رو بذارید.",
              },
            },
          ],
        },
        {
          label: "نمایش",
          fields: [
            {
              name: "isFeatured",
              type: "checkbox",
              label: "محصول ویژه (نمایش در صفحه اصلی)",
              defaultValue: false,
            },
            {
              name: "isActive",
              type: "checkbox",
              label: "فعال (نمایش در سایت)",
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