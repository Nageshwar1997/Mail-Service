import express from "express";
import "dotenv/config";
import { IS_DEV, PORT } from "./envs";
import { transporter } from "./service";
import { verifyConnectionController } from "./controllers/verifyConnection";
import { sendOtpController } from "./controllers/sendOtp";
import { sendPasswordResetLinkController } from "./controllers/sendPasswordResetLink";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("Mail Service is ready to go!");
});

app.get("/verify-connection", verifyConnectionController);
app.post("/send-otp", sendOtpController);
app.post("/send-password-reset-link", sendPasswordResetLinkController);

(async () => {
  if (IS_DEV) {
    try {
      await transporter.verifyConnection();

      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("❌ Failed to start server:", err);
      process.exit(1);
    }
  } else {
    console.log(`Application is running`);
  }
})();

export default app;
