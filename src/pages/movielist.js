import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const apiUrl = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL_PROD 
  : process.env.REACT_APP_API_URL;

function MovieList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMovies = fetch(`${apiUrl}/movies`).then(response => response.json());
    const fetchTVShows = fetch(`${apiUrl}/tvshows`).then(response => response.json());

    Promise.all([fetchMovies, fetchTVShows])
      .then(([movies, tvshows]) => {
        setItems([...movies, ...tvshows]);
      })
      .catch(error => console.error('Error fetching movies and TV shows:', error));
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
