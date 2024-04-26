const express = require("express");
const morgan = require("morgan");
uuid = require("uuid");

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
let users = [
  {
    id: 1,
    name: "Sharon",
    favoriteMovies: [],
  },
  {
    id: 2,
    name: "joe",
    favoriteMovies: ["The Fountain"],
  },
];

let topMovies = [
  {
    Title: "The Shawshank Redemption",
    Description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Genre: {
      Name: "Drama",
      Description:
        "A genre that focuses on serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature.",
    },
    Director: {
      Name: "Frank Darabont",
      Bio: "Frank Darabont is a Hungarian-American film director, screenwriter, and producer who has been nominated for three Academy Awards and a Golden Globe.",
      Birth: "January 28, 1959",
    },
    ImageURL: "https://example.com/the-shawshank-redemption.jpg",
    Featured: false,
  },
  {
    Title: "The Godfather",
    Description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    Genre: {
      Name: "Crime",
      Description:
        "A genre that focuses on criminal activities or the criminal lifestyle.",
    },
    Director: {
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola is an American film director, producer, and screenwriter who was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s.",
      Birth: "April 7, 1939",
    },
    ImageURL: "https://example.com/the-godfather.jpg",
    Featured: false,
  },
  {
    Title: "The Dark Knight",
    Description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Genre: {
      Name: "Action",
      Description:
        "A genre characterized by strong violence, fighting, and intense physical activity.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter known for his distinctive style and innovative approach to filmmaking.",
      Birth: "July 30, 1970",
    },
    ImageURL: "https://example.com/the-dark-knight.jpg",
    Featured: false,
  },
  {
    Title: "Pulp Fiction",
    Description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    Genre: {
      Name: "Crime",
      Description:
        "A genre that focuses on criminal activities or the criminal lifestyle.",
    },
    Director: {
      Name: "Quentin Tarantino",
      Bio: "Quentin Tarantino is an American film director, screenwriter, producer, and actor known for his nonlinear storylines, satirical subject matter, and aestheticization of violence.",
      Birth: "March 27, 1963",
    },
    ImageURL: "https://example.com/pulp-fiction.jpg",
    Featured: false,
  },
  {
    Title: "Schindlers List",
    Description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    Genre: {
      Name: "Biography",
      Description:
        "A genre that focuses on the lives of real people, often depicting historical events or figures.",
    },
    Director: {
      Name: "Steven Spielberg",
      Bio: "Steven Spielberg is an American film director, producer, and screenwriter known for his work in blockbuster films and his contributions to the film industry.",
      Birth: "December 18, 1946",
    },
    ImageURL: "https://example.com/schindlers-list.jpg",
    Featured: false,
  },
  {
    Title: "Forrest Gump",
    Description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    Genre: {
      Name: "Drama",
      Description:
        "A genre that focuses on serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature.",
    },
    Director: {
      Name: "Robert Zemeckis",
      Bio: "Robert Zemeckis is an American film director, producer, and screenwriter known for his work in various genres, including comedy, science fiction, and drama.",
      Birth: "May 14, 1952",
    },
    ImageURL: "https://example.com/forrest-gump.jpg",
    Featured: false,
  },
  {
    Title: "Inception",
    Description:
      "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    Genre: {
      Name: "Science Fiction",
      Description:
        "A genre that explores imaginative concepts that are largely based on speculative scientific discoveries, phenomena, or events.",
    },
    Director: {
      Name: "Christopher Nolan",
      Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter known for his distinctive style and innovative approach to filmmaking.",
      Birth: "July 30, 1970",
    },
    ImageURL: "https://example.com/inception.jpg",
    Featured: false,
  },
  {
    Title: "The Matrix",
    Description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    Genre: {
      Name: "Science Fiction",
      Description:
        "A genre that explores imaginative concepts that are largely based on speculative scientific discoveries, phenomena, or events.",
    },
    Director: {
      Name: "Lana Wachowski, Lilly Wachowski",
      Bio: "Lana Wachowski and Lilly Wachowski are American film directors, producers, and screenwriters known for their work in the science fiction genre.",
      Birth:
        "June 21, 1965 (Lana Wachowski), December 29, 1967 (Lilly Wachowski)",
    },
    ImageURL: "https://example.com/the-matrix.jpg",
    Featured: false,
  },
  {
    Title: "Flight club",
    Description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    Genre: {
      Name: "Drama",
      Description:
        "A genre that focuses on serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature.",
    },
    Director: {
      Name: "David Fincher",
      Bio: "David Fincher is an American film director, producer, and screenwriter known for his dark and stylish thrillers, such as Se7en, Fight Club, and Gone Girl.",
      Birth: "August 28, 1962",
    },
    ImageURL: "https://example.com/fight-club.jpg",
    Featured: false,
  },
  {
    Title: "GoodFellas",
    Description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    Genre: {
      Name: "Crime",
      Description:
        "A genre that focuses on criminal activities or the criminal lifestyle.",
    },
    Director: {
      Name: "Martin Scorsese",
      Bio: "Martin Scorsese is an American film director, producer, screenwriter, and actor known for his work in the crime genre and his collaborations with actor Robert De Niro.",
      Birth: "November 17, 1942",
    },
    ImageURL: "https://example.com/goodfellas.jpg",
    Featured: false,
  },
];

//CREATE
app.post("/users", (req, res) => {
  const newUser = req.body;
  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).send("users need names");
  }
});

//CREATE
app.post("/users/:id/:movieTitle", (req, res) => {
  const { id, movieTitle } = req.params;
  let user = users.find((user) => user.id == id);
  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send("$(movieTitle) has been added to user $(id)");
  } else {
    res.status(400).send("no such users");
  }
});

//UPDATE
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  let user = users.find((user) => user.id == id);
  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send("No such user");
  }
});

//DELETE
app.delete("/users/:id/:movieTitle", (req, res) => {
  const { id, movieTitle } = req.params;
  let user = users.find((user) => user.id == id);
  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(
      (title) => title !== movieTitle
    );
    res.status(200).send(`${movieTitle} has been removed from user ${id}`);
  } else {
    res.status(400).send("No such user");
  }
});

//DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  let user = users.find((user) => user.id == id);
  if (user) {
    users = users.filter((user) => user.id != id);
    res.status(200).send(`${id} has been removed from user list`);
  } else {
    res.status(400).send("No such user");
  }
});

//READ
app.get("/", (req, res) => {
  //throw new error("Hello");
  res.send("Welcome to the list of topmovies!");
});
//READ
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//READ
app.get("/movies", (req, res) => {
  res.status(200).json(topMovies);
});

//READ
app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  const movie = topMovies.find((movie) => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send("No such movie found");
  }
});

//READ
app.get("/movies/genre/:genreName", (req, res) => {
  const { genreName } = req.params;
  const genre = topMovies.find((movie) => movie.Genre.Name === genreName).Genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send("No such genre");
  }
});

//READ
app.get("/movies/director/:directorName", (req, res) => {
  const { directorName } = req.params;
  const director = topMovies.find(
    (movie) => movie.Director.Name === directorName
  ).Director;
  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send("no such director name");
  }
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
