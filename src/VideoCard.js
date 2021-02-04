import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  const history = useHistory();
  const [{ _movie }, dispatch] = useStateValue();

  return (
    <div ref={ref} className="videoCard">
      <img
        onClick={() => {
          if (movie) {
            dispatch({
              type: "SET_MOVIE",
              _movie: movie,
            });
          }
          history.push("/play");
        }}
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} •`}
        {movie.release_date || movie.first_air_date} •
        <ThumbUpSharp /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
