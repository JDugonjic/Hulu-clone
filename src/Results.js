import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <Link to={`/play/${movie.title}`}>
            <VideoCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
