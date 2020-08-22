// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.json({ endpoint: "/root" });
// });

// app.get("/books", (req, res) => {
//   res.json({ endpoint: "/books" });
// });

// app.listen(3000, () => console.log("LISTEN 3000"));

module.exports = (req, res) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
