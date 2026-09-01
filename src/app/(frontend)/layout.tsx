import React from "react";

export const metadata = {
  description: "پنل مدیریت محتوای هزاره کالا",
  title: "پنل مدیریت | هزاره کالا",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}