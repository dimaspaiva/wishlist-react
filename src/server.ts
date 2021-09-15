import { join } from "path";
import express from "express";
import nunjucks from "nunjucks";

const app = express();

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "njk");
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.json({
    message: "sending something",
  });
});

app.get("/search", (req, res) => {
  res.render("index", { title: "magalu", message: "Running nunjucks!" });
});

export default app;
