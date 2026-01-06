import { Request, Response } from "express";
import { transporter } from "../service";

export const sendOtpController = async (req: Request, res: Response) => {
  try {
    const { to, otp } = req.body ?? {};

    if (!to || !otp) {
      throw new Error("Missing required fields, please provide 'to' and 'otp'");
    }

    await transporter.sendOtp(to, otp);

    res.status(200).json({
      message: "OTP sent successfully",
      success: true,
    });
  } catch (error) {
    console.log("❌ OTP sending failed", error);
    res.status(500).json({
      message:
        typeof error === "string"
          ? error
          : error instanceof Error
          ? error.message
          : "OTP sending failed",
      success: false,
    });
  }
};
