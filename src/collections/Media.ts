import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/webp", "image/png", "image/jpeg", "image/jpg", "video/mp4", "video/webm"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 576,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
    resizeOptions: {
      width: 1920,
      height: 1080,
      position: "centre",
      withoutEnlargement: true,
    },
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "متن جایگزین (برای SEO الزامی است)",
    },
  ],
};