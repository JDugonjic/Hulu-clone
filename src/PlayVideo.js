import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
const opts = {
  playerVars: {
    height: "100%",
    // https://develepers
    autoplay: 1,
  },
};

function PlayVideo() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [{ _movie, selectedCategory }, dispatch] = useStateValue();
  const history = useHistory();
  const { movieTitle } = useParams();

  useEffect(() => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(_movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }, [_movie]);
  return (
    <div className="playVideo">
      <div className="playVideo__close">
        <Button
          onClick={() => history.push(`/${selectedCategory}`)}
        >
          X
        </Button>
      </div>

      <div className="playVideo__player">
        <YouTube className="youtube__player" videoId={trailerUrl} opts={opts} />
      </div>
      <div className="playVideo__info">
        <h2>{_movie?.title}</h2>
        <p>{_movie?.overview}</p>
      </div>
    </div>
  );
}

export default PlayVideo;
