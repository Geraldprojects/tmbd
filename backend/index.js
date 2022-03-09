const axios = require("axios");
const express = require("express");

const app = express();
const port = 5000;

const API_KEY = "d4f7b87d7cedfdfbbb297f46aa3e8779";

app.get("/", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1`
    )
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.listen(port, () => console.log(`backend server running on port ${port}`));
