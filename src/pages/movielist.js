import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MovieList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setItems([...data.movies, ...data.tvshows]))
      .catch(error => console.error('Error fetching the JSON data:', error));
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
