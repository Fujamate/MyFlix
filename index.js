const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
let topMovies = [
  {
    title: "Inglourious Basterds",
    author: "Quentin Tarantino",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my app!");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.use(express.static("public"));

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
