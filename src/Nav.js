import "./Nav.css";
import requests from "./requests";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";

function Nav({ setSelectedOption }) {
  const [category, setCategory] = useState("");
  const [selectedCategory, dispatch] = useStateValue();

  useEffect(() => {
    if (category) {
      dispatch({
        type: "SET_CATEGORY",
        selectedCategory: category,
      });
      console.log(category);
    }
  }, [category]);
  return (
    <div className="nav">
      <NavLink to="/trending" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchTrending);
            setCategory("trending");
          }}
        >
          Trending
        </h2>
      </NavLink>
      <NavLink to="/topRated" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchTopRated);
            setCategory("topRated");
          }}
        >
          Top Rated
        </h2>
      </NavLink>
      <NavLink to="/action" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchActionMovies);
            setCategory("action");
          }}
        >
          Action
        </h2>
      </NavLink>
      <NavLink to="/comedy" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchComedyMovies);
            setCategory("comedy");
          }}
        >
          Comedy
        </h2>
      </NavLink>
      <NavLink to="/horror" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchHorrorMovies);
            setCategory("horror");
          }}
        >
          Horror
        </h2>
      </NavLink>
      <NavLink to="/romance" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchRomanceMovies);
            setCategory("romance");
          }}
        >
          Romance
        </h2>
      </NavLink>
      <NavLink to="/mystery" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchMistery);
            setCategory("mystery");
          }}
        >
          Mystery
        </h2>
      </NavLink>
      <NavLink to="/sci-fi" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchSciFi);
            setCategory("sci-fi");
          }}
        >
          Sci-Fi
        </h2>
      </NavLink>
      <NavLink to="/animation" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchAnimation);
            setCategory("animation");
          }}
        >
          Animation
        </h2>
      </NavLink>
      <NavLink to="/tvMovies" activeClassName="nav__active">
        <h2
          onClick={() => {
            setSelectedOption(requests.fetchTV);
            setCategory("tvMovies");
          }}
        >
          TV Movies
        </h2>
      </NavLink>
    </div>
  );
}

export default Nav;
