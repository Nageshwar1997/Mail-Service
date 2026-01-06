import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is ready 🚀",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy 🚀",
  });
});

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
