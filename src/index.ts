import express, { Application } from "express";
import { transporter } from "./services";

const app: Application = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is ready 🚀",
  });
});

app.get("/send-email", async (_req, res) => {
  await transporter.sendMail({
    htmlOrText: "Hello",
    subject: "Hello",
    to: "nageshwar@ctruh.com",
  });

  res.status(200).json({
    success: true,
    message: "Email sent successfully",
  });
});

const PORT = 8081;

app.listen(PORT, async () => {
  await transporter.verifyConnection();
  console.log(`Server is running on port ${PORT}`);
});

export { app };
