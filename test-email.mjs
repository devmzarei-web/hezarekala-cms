import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });
dotenv.config();

const host = process.env.SMTP_HOST || 'mail.hezarehkala.com';
const port = Number(process.env.SMTP_PORT || 465);
const user = process.env.SMTP_USER || 'support@hezarehkala.com';
const pass = process.env.SMTP_PASS || 'Support-Hezareh@2026';

console.log(`Testing SMTP Connection to ${host}:${port} as ${user}...`);

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
  tls: { rejectUnauthorized: false }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Error:', error);
  } else {
    console.log('✅ SMTP Server Connection Verified!');
    transporter.sendMail({
      from: `"Test Notification" <${user}>`,
      to: user,
      subject: 'Test Email from HezarehKala VPS',
      text: 'If you receive this, SMTP email configuration is 100% working!'
    }).then(info => {
      console.log('✅ Email delivered! MessageID:', info.messageId);
    }).catch(err => {
      console.error('❌ Send Mail Error:', err);
    });
  }
});
