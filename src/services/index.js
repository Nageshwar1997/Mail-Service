const nodemailer = require("nodemailer");
const { convert } = require("html-to-text");
const {
  getOtpHtmlMessage,
  getPasswordResetHtmlMessage,
  getNewPasswordHtmlMessage,
} = require("../helpers");

const transporterConfig = nodemailer.createTransport({
  host: "smtp.mandrillapp.com",
  port: 465,
  secure: true,
  auth: {
    user: "Ctruh",
    pass: "md-Ap3l4MhOpE1qZyxD70f81g",
  },
  // logger: true,
  // debug: true,
});

let isVerified = false; // ✅ flag to ensure only one-time verification

class EmailService {
  constructor() {
    this.transporter = transporterConfig;

    // Immediately verify connection once when instance is created
    this.verifyConnection();
  }

  // Test connection
  async verifyConnection() {
    if (isVerified) return; // skip if already verified
    try {
      await this.transporter.verify();
      console.log("📪 Email server ready");
      isVerified = true; // mark verified
    } catch (err) {
      console.error("❌ Email server connection failed", err);
    }
  }

  // Generic send email
  async sendMail(options) {
    const text = convert(options.htmlOrText, { wordwrap: 130 });

    return this.transporter.sendMail({
      from: "Beautinique <auth@ctruh.com>",
      to: options.to,
      subject: options.subject,
      text,
      html: options.htmlOrText,
    });
  }

  // OTP Email
  async sendOtpEmail(to, otp) {
    const html = getOtpHtmlMessage("OTP Verification", otp);
    await this.sendMail({ to, subject: "Your OTP Code 🔑", htmlOrText: html });
  }

  // Password Reset Email
  async sendPasswordResetEmail(to, resetLink) {
    const html = getPasswordResetHtmlMessage("Password Reset", resetLink);
    await this.sendMail({ to, subject: "Password Reset", htmlOrText: html });
  }

  // New Password Email
  async sendNewPasswordEmail(to, password, link) {
    const html = getNewPasswordHtmlMessage("New Password", password, link);
    await this.sendMail({ to, subject: "New Password", htmlOrText: html });
  }

  // Order Confirmation Example
  async sendOrderEmail(to, orderId) {
    const html = `
      <h2>Order Confirmed 🎉</h2>
      <p>Your order <b>#${orderId}</b> has been placed successfully.</p>
    `;

    await this.sendMail({
      to,
      subject: "Order Confirmation ✅",
      htmlOrText: html,
    });
  }
}

module.exports = new EmailService();
