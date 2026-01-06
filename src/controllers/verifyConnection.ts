import { Request, Response } from "express";
import { transporter } from "../service";

export const verifyConnectionController = async (
  _req: Request,
  res: Response
) => {
  try {
    await transporter.verifyConnection();
    res.status(200).json({
      message: "📪 Email server ready",
      status: true,
    });
  } catch (error) {
    console.log("❌ Email server connection failed", error);
    res.status(500).json({
      message: "❌ Email server connection failed",
      status: false,
      error,
    });
  }
};
