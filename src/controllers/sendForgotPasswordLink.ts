import { Request, Response } from "express";
import { transporter } from "../service";
import { getCatchErrorMessage } from "../helpers";

export const sendForgotPasswordLinkController = async (
  req: Request,
  res: Response
) => {
  try {
    const { to, link } = req.body ?? {};

    if (!to || !link) {
      throw new Error(
        "Missing required fields, please provide 'to' and 'link'"
      );
    }

    await transporter.sendForgotPasswordLink(to, link);

    res.status(200).json({
      message: "Forgot password link sent successfully",
      success: true,
    });
  } catch (error) {
    console.log("❌ Forgot password link sending failed", error);
    res.status(500).json({
      message: getCatchErrorMessage(
        error,
        "Forgot password link sending failed"
      ),
      success: false,
    });
  }
};
