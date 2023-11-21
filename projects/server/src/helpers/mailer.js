import nodemailer from "nodemailer";
import mustache from "mustache";
import fs from "fs";

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

const pathVerifyEmail = "./src/helpers/template/verify-email.html";
// from: { name: "PMC Black Water", address: `${process.env.GMAIL_USER}` },

const verifyEmail = (email, otp) => {
  const temp = fs.readFileSync(pathVerifyEmail, "utf8");
  const body = mustache.render(temp, { otp });
  const mailOpt = {
    from: `PMC Black Water <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Verify Email",
    html: body,
  };
  mailer.sendMail(mailOpt);
};

export default { verifyEmail };
