import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";

import "./App.css";
import MovieCard from "../componentes/movieCard/movieCard";
import Footer from "../componentes/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "103e6d94";
  const apiUrl = `https://omdbapi.com/?apiKey=${apiKey}`;

  // https://omdbapi.com/?apiKey=e4d577fa&s=superman

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="logo">
        DEVFLIX
      </div>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          // placeholder="Pesquise por filmes"
        />
        <ion-icon name="search-outline" size="large" onClick={() => searchMovies(searchTerm)}></ion-icon>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😶</h2>
        </div>
      )}

      <Footer link={"https:github.com.br"}>Ribeirinho</Footer>
    </div>
  );
};

export default App;
