import React from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
export default function Movies() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("./assets/movies.json")
      .then((response) => {
        setMovies(response?.data?.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie movie={movie} key={index} />;
      })}
    </div>
  );
}
