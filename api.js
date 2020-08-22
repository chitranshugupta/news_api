const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
var rp = require("request-promise");
const routes = require("./routes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", routes);
app.get("/business", routes);
app.get("/sports", routes);
app.get("/entertainment", routes);
app.get("/health", routes);
app.get("/science", routes);

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
