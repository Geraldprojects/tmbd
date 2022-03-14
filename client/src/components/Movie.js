import "../styles/movie.css";

export const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <span className="rating" style={{ backgroundColor: "red" }}>
      {/*   {(() => {
          switch (this.state.color) {
            case (vote_average = 0):
              return "grey";
            case vote_average < 50:
              return "red";
            case vote_average >= 50 || vote_average < 70:
              return "yellow";
            case vote_average >= 70:
              return "Green";
            default:
              return "transparent";
          }
        })()} */}
        {vote_average}
      </span>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
