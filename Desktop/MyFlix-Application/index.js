const express = require("express");
const morgan = require("morgan");

const app = express();
const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

// Middleware to log all requests
app.use(morgan("common"));

//app.use(express.static("movie_api"));

let topMovies = [
  {
    title: "The Shawshank Redemption",
    rating: "9/10",
  },
  {
    title: "The Godfather",
    rating: "10/10",
  },
  {
    title: "The Dark Knight",
    rating: "9/10",
  },
  {
    title: "Pulp Fiction",
    rating: "9/10",
  },
  {
    title: "Schindlers List",
    rating: "10/10",
  },
  {
    title: "Forrest Gump",
    rating: "9/10",
  },
  {
    title: "Inception",
    rating: "9/10",
  },
  {
    title: "The Matrix",
    rating: "8/10",
  },
  {
    title: "Flight club",
    rating: "9/10",
  },
  {
    title: "GoodFellas",
    rating: "9/10",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the list of topmovies!");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

//Static file
app.use(
  "/documentation",
  express.static("movie_api/public", { index: "documentation.html" })
);

// Error handling middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
