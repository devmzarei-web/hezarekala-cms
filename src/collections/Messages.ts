// @ts-ignore
import type { CollectionConfig } from "payload";

interface AfterChangeHookArgs {
  doc: Record<string, any>;
  operation: "create" | "update" | "delete" | string;
  req?: any;
  previousDoc?: any;
}

const sendEmailNotification = async ({ doc, operation }: AfterChangeHookArgs): Promise<void> => {
  if (operation === "create") {
    try {
      // Ensure environment variables are loaded from multiple possible locations
      try {
        // @ts-ignore
        const dotenv = await import("dotenv");
        // @ts-ignore
        const path = await import("path");
        // @ts-ignore
        const cwd = typeof process !== "undefined" ? process.cwd() : ".";
        dotenv.config({ path: path.resolve(cwd, ".env.production") });
        dotenv.config({ path: path.resolve(cwd, ".env") });
        dotenv.config({ path: "/var/www/hezarekala-cms/.env.production" });
        dotenv.config({ path: "/var/www/hezarekala-cms/.env" });
        dotenv.config();
      } catch (e) {}

      // @ts-ignore
      const nodemailer = await import("nodemailer");
      // @ts-ignore
      const globalProcess = typeof process !== "undefined" ? process : ({} as any);
      const env = (globalProcess.env || {}) as Record<string, string | undefined>;

      const host = env.SMTP_HOST || "mail.hezarehkala.com";
      const port = Number(env.SMTP_PORT || 465);
      const user = env.SMTP_USER || "support@hezarehkala.com";
      const pass = env.SMTP_PASS;
      const recipient = env.NOTIFICATION_EMAIL || "support@hezarehkala.com";

      if (!pass) {
        console.error(`[Email Notification Error] SMTP_PASS is empty or undefined! Please check /var/www/hezarekala-cms/.env.production`);
      }

      console.log(`[Email Notification] Sending email for message ID ${doc.id || 'new'} to ${recipient} via ${host}:${port} (user: ${user}, pass length: ${pass ? pass.length : 0})`);

      const transporter = nodemailer.default.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const info = await transporter.sendMail({
        from: `"پشتیبانی هزارکالا | HezarehKala" <${user}>`,
        to: recipient,
        subject: `📩 پیام جدید در سایت: ${doc.subject || doc.fullName}`,
        html: `
          <div style="font-family: Tahoma, Arial, sans-serif; direction: rtl; text-align: right; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">پیام جدید از فرم تماس سایت</h2>
            <p><strong>نام و نام خانوادگی:</strong> ${doc.fullName || ''}</p>
            <p><strong>نام شرکت / سازمان:</strong> ${doc.company || 'ثبت نشده'}</p>
            <p><strong>شماره تماس:</strong> <a href="tel:${doc.phone}">${doc.phone || ''}</a></p>
            <p><strong>ایمیل فرستنده:</strong> ${doc.email || 'ثبت نشده'}</p>
            <p><strong>موضوع:</strong> ${doc.subject || ''}</p>
            <div style="background-color: #f7fafc; padding: 15px; border-right: 4px solid #3182ce; margin: 15px 0;">
              <strong>متن پیام:</strong><br/>
              <p style="white-space: pre-wrap; margin-top: 8px;">${doc.message || ''}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
            <p style="font-size: 12px; color: #718096; text-align: center;">این ایمیل به صورت خودکار از پنل مدیریت هزارکالا (HezarehKala CMS) ارسال شده است.</p>
          </div>
        `,
      });

      console.log(`[Email Notification] Email sent successfully! MessageId: ${info.messageId}`);
    } catch (err) {
      console.error("[Email Notification Error]:", err);
    }
  }
};

export const Messages: CollectionConfig = {
  slug: "messages",
  labels: {
    singular: "پیام",
    plural: "پیام‌ها",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    afterChange: [sendEmailNotification as any],
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      label: "نام و نام خانوادگی",
    },
    {
      name: "company",
      type: "text",
      label: "نام شرکت / سازمان",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "شماره تماس",
    },
    {
      name: "email",
      type: "email",
      label: "ایمیل",
    },
    {
      name: "subject",
      type: "text",
      required: true,
      label: "موضوع",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "متن پیام",
    },
    {
      name: "isRead",
      type: "checkbox",
      label: "خوانده شده",
      defaultValue: false,
    },
  ],
};