const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("root_page");
});

app.get("/artist", (req, res) => {
  res.render("category/artist");
});

app.get("/era", (req, res) => {
  res.render("category/era");
});

app.get("/sytle", (req, res) => {
  res.render("category/style");
});

app.get("/year", (req, res) => {
  res.render("category/year");
});

app.get("/inquery", (req, res) => {
  res.render("inquery");
});

app.listen(port, () => {
  console.log("Server open: ", port);
});
