const axios = require("axios");
const express = require("express");


const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = 5000;

const API_KEY = "d4f7b87d7cedfdfbbb297f46aa3e8779";

app.get("/popular", (req, res, next) => {
  console.log("'/popular' call");
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(
      (response) => {
        res.json(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});app.get("/", (req, res, next) => {
  console.log("'/popular' call");
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(
      (response) => {
        res.json(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
});

app.listen(port, () => console.log(`backend server running on port ${port}`));
