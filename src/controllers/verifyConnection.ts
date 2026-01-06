import { Request, Response } from "express";
import { transporter } from "../service";
import { getCatchErrorMessage } from "../helpers";

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
      message: getCatchErrorMessage(error, "Email server connection failed"),
      success: false,
      error,
    });
  }
};
