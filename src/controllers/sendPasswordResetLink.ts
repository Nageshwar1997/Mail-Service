import { Request, Response } from "express";
import { transporter } from "../service";
import { getCatchErrorMessage } from "../helpers";

export const sendPasswordResetLinkController = async (
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

    await transporter.sendPasswordResetLink(to, link);

    res.status(200).json({
      message: "Password reset link sent successfully",
      success: true,
    });
  } catch (error) {
    console.log("❌ Password reset link sending failed", error);
    res.status(500).json({
      message: getCatchErrorMessage(
        error,
        "Password reset link sending failed"
      ),
      success: false,
    });
  }
};
