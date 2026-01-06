import { Request, Response } from "express";
import { transporter } from "../service";

export const sendOtpController = async (req: Request, res: Response) => {
  try {
    const { to, otp } = req.body ?? {};

    if (!to || !otp) {
      res.status(400).json({
        message: "❌ Missing required fields, please provide 'to' and 'otp'",
        status: false,
      });
      return;
    }

    await transporter.sendOtp(to.lowerCase(), otp);

    res.status(200).json({
      message: "✉️ OTP sent successfully",
      status: true,
    });
  } catch (error) {
    console.log("❌ OTP sending failed", error);
    res.status(500).json({
      message: "❌ OTP sending failed",
      status: false,
      error,
    });
  }
};
