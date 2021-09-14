import { join } from "path";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "sending something",
  });
});

app.get("/search", (req, res) => {
  res.sendFile(join(__dirname, "pages", "search.html"));
});

export default app;
