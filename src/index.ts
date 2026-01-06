import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});
app.get("/test", (_req, res) => {
  res.send("Hello test!");
});

export default app; // Vercel will wrap this as a serverless function
