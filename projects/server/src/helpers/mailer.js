import nodemailer from "nodemailer";
import mustache from "mustache";
import puppeteer from "puppeteer";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const mailer = nodemailer.createTransport({
  port: process.env.MAILER_PORT,
  host: process.env.MAILER_HOST,
  secure: true,
  pool: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const pathVerifyEmail = join(__dirname, "/template/verify-email.html");
const pathResetPassword = join(__dirname, "/template/reset-password.html");
const pathInvoice = join(__dirname, "/template/invoice.html");
const pathProveTransaction = join(__dirname, "/template/prove-transaction.html");

export const invoicePdf = async (content) => {
  const template = fs.readFileSync(pathInvoice, "utf-8");
  const rendered = mustache.render(template, content);

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(rendered, { waitUntil: "domcontentloaded" });

  await page.pdf({
    path: join(__dirname, `../public/files/invoice-${content.orderId}.pdf`),
    format: "A4",
    printBackground: true,
  });

  await browser.close();
};

const verifyEmail = async (email, content) => {
  const temp = fs.readFileSync(pathVerifyEmail, "utf8");
  const body = mustache.render(temp, content);
  const mailOpt = {
    from: `Lawang Inc. <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Verify Email",
    html: body,
    attachments: [
      {
        filename: "lawang.png",
        path: join(__dirname, "../public/resources/lawang.png"),
        cid: "logo",
      },
    ],
  };
  mailer.sendMail(mailOpt);
};

const resetPassword = async (email, content) => {
  const temp = fs.readFileSync(pathResetPassword, "utf8");
  const body = mustache.render(temp, content);
  const mailOpt = {
    from: `Lawang Inc. <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Reset Password",
    html: body,
    attachments: [
      {
        filename: "lawang.png",
        path: join(__dirname, "../public/resources/lawang.png"),
        cid: "logo",
      },
    ],
  };
  mailer.sendMail(mailOpt);
};

const invoice = async (email, content) => {
  const temp = fs.readFileSync(pathProveTransaction, "utf8");
  const body = mustache.render(temp, content);
  const mailOpt = {
    from: `Lawang Inc. <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Invoice",
    html: body,
    attachments: [
      {
        filename: `invoice-${content.orderId}.pdf`,
        path: join(__dirname, `../public/files/invoice-${content.orderId}.pdf`),
        contentType: "application/pdf",
      },
    ],
  };
  mailer.sendMail(mailOpt);
};

export default { verifyEmail, resetPassword, invoicePdf, invoice };
