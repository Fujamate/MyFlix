const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let movies = [
  {
    title: "Inglourious Basterds",
    author: "Quentin Tarantino",
  },
  {
    title: "John Wick: Chapter 4",
    author: "Chad Stahelski",
  },
  {
    title: "Fall",
    author: "Scott Mann",
  },
];

// Gets the list of data about ALL Movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Gets the data about a single movie, by title
app.get("/movies/:Title", (req, res) => {
  res.send("Data about a single movie");
});

// Get data about a genre by genre's name
app.get("/movies/genre/:genreName", (req, res) => {
  res.send("Get data about a genre by genre's name");
});

// Get data about a director by director's name
app.get("/movies/directors/:directorName", (req, res) => {
  res.send("Get data about a director by director's name");
});

// Add a new user
app.post("/users", (req, res) => {
  res.send("Create a new User");
});

// Update user info
app.put("/users/:Username", (req, res) => {
  res.send("Update a User");
});

//Add a movie to user favorite list
app.post("/users/:Username/movies/:movie", (req, res) => {
  res.send("Add a movie to user favorite list");
});

// Remove a movie from user favorite list
app.delete("/users/:Username/movies/:movie", (req, res) => {
  res.send("Remove a movie from user favorite list");
});

// Delete user registration
app.delete("/users/:Username", (req, res) => {
  res.send("Delete user registration");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080");
});
