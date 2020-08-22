var express = require("express");
var routes = express.Router();
var rp = require("request-promise");

async function get_news(para) {
  let obj_x;
  if (para) {
    obj_x = {
      country: "in",
      category: para,
      apiKey: "be424d04c50b47d68a7330449b17a437",
    };
  } else {
    obj_x = {
      country: "in",
      apiKey: "be424d04c50b47d68a7330449b17a437",
    };
  }
  var options = {
    uri: `
          http://newsapi.org/v2/top-headlines`,
    qs: obj_x,

    headers: {
      "User-Agent": "Request-Promise",
    },
    json: true, // Automatically parses the JSON string in the response
  };

  const news = await rp(options);
  return news.articles;
}
routes.get("/", async (req, res, next) => {
  let data = await get_news("");
  res.render("index", {
    news: data,
    val: "Headlines",
  });
});
routes.get("/business", async (req, res, next) => {
  let data = await get_news("business");
  res.render("index", {
    news: data,
    val: "Business",
  });
});
routes.get("/science", async (req, res, next) => {
  let data = await get_news("science");
  res.render("index", {
    news: data,
    val: "Science",
  });
});
routes.get("/entertainment", async (req, res, next) => {
  let data = await get_news("entertainment");
  res.render("index", {
    news: data,
    val: "Entertainment",
  });
});
routes.get("/health", async (req, res, next) => {
  let data = await get_news("health");
  res.render("index", {
    news: data,
    val: "Health",
  });
});
routes.get("/technology", async (req, res, next) => {
  let data = await get_news("technology");
  res.render("index", {
    news: data,
    val: "Technology",
  });
});
routes.get("/sports", async (req, res, next) => {
  let data = await get_news("sports");
  res.render("index", {
    news: data,
    val: "Sports",
  });
});
module.exports = routes;
