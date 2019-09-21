const express = require("express"),
  bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/auth/google", function(req, res) {
  res.render("authgoogle");
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!");
});
