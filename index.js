const express = require("express");
const app = express();
const port = 3000;

var quotes = require("random-movie-quotes");

app.use(express.static("public"));

app.get("/quotes", async (req, res, next) => {
  const quote = await quotes.getQuote();
  res.json({ quote });
  next();
});

app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));

module.exports = app;
