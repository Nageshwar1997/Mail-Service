import { convert } from "html-to-text";
import transporterConfig from "../configs";
import {
  getForgotPasswordHtmlMessage,
  getOtpHtmlMessage,
  getPasswordResetHtmlMessage,
} from "../helpers";
import { MAIL_FROM } from "../envs";

class EmailService {
  private transporter;

  constructor() {
    this.transporter = transporterConfig;
  }

  // Test connection
  public async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log("📪 Email server ready");
    } catch (err) {
      console.error("❌ Email server connection failed", err);
    }
  }

  // Generic send email
  public async sendMail(options: {
    to: string;
    subject: string;
    htmlOrText: string;
  }) {
    // const htmlToText =
    const text = convert(options.htmlOrText, { wordwrap: 130 });

    return this.transporter.sendMail({
      from: `Beautinique <${MAIL_FROM}>`,
      to: options.to,
      subject: options.subject,
      text,
      html: options.htmlOrText,
    });
  }

  // OTP Email
  public async sendOtp(to: string, otp: string) {
    const html = getOtpHtmlMessage("OTP Verification", otp);
    await this.sendMail({ to, subject: "Your OTP Code 🔑", htmlOrText: html });
  }
  // Password Reset Link Email
  public async sendPasswordResetLink(to: string, resetLink: string) {
    const html = getPasswordResetHtmlMessage("Reset Password", resetLink);
    await this.sendMail({ to, subject: "Reset Password", htmlOrText: html });
  }
  // Password Reset Link Email
  public async sendForgotPasswordLink(to: string, link: string) {
    const html = getForgotPasswordHtmlMessage("Set New Password", link);
    await this.sendMail({ to, subject: "Set New Password", htmlOrText: html });
  }
}

export const transporter = new EmailService();
