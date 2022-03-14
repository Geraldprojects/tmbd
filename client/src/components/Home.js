import { useEffect, useState } from "react";
import '../styles/home.css';
import { Movie } from "./Movie";

const popular_API = `http://localhost:5000/`;

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(popular_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};
