const express = require("express");
const transporter = require("./services");

const app = express();

app.use(express.json());

// Root endpoint
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is ready 🚀",
  });
});

// Send email endpoint
app.get("/send-email", async (_req, res) => {
  try {
    await transporter.sendMail({
      htmlOrText: "<h1>Hello</h1>",
      subject: "Hello",
      to: "nageshwar@ctruh.com",
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully ✅",
    });
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

const PORT = 8081;
app.listen(PORT, async () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
