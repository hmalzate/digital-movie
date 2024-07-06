import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; /*use for navigation*/
import '../App.css';

function MovieList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = fetch('/db.json/movies').then(response => response.json()); /*fetches data from the URL*/
    const fetchTVShows = fetch('/db.json/tvshows').then(response => response.json());

    Promise.all([fetchMovies, fetchTVShows]) /*wait for the request to fetch completely*/
      .then(([movies, tvshows]) => {
        setItems([...movies, ...tvshows]);
      });
  }, []);

  return (
    <div className="movie-list">
      <h2>Movies & TV Shows</h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="movie-item">
            <Link to={`/movie/${item.id}`}>
              <img src={item.poster} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
