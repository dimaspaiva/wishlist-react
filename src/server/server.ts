import { join } from "path";
import express from "express";
import nunjucks from "nunjucks";

const app = express();

const pagesPath = join(__dirname, "pages");

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "njk");
nunjucks.configure([pagesPath], {
  autoescape: true,
  express: app,
});

app.get("/*", (req, res) => {
  res.render("template", {
    title: "magalu",
    message: "Running nunjucks!",
  });
});

export default app;
