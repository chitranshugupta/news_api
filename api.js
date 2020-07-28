const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
var rp = require("request-promise");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
async function get_news() {
  var options = {
    uri: `
        http://newsapi.org/v2/top-headlines`,
    qs: {
      country: "in",
      category: "technology",
      apiKey: "be424d04c50b47d68a7330449b17a437",
    },
    headers: {
      "User-Agent": "Request-Promise",
    },
    json: true, // Automatically parses the JSON string in the response
  };

  const news = await rp(options);
  return news.articles;
}
app.get("/", async (req, res, next) => {
  let data = await get_news();
  //   data.forEach((element) => {
  //     console.log(element);
  //   });
  res.render("index", {
    news: data,
  });
});

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
