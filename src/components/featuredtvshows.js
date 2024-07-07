import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const apiUrl = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL_PROD 
  : process.env.REACT_APP_API_URL;

function FeaturedTVShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/tvshows`)
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h2>Featured TV Shows</h2>
        <div className="view-all">
          <Link to="/movies">View All</Link>
        </div>
      </div>
      <div className="featured-grid">
        {shows.map((show) => (
          <div key={show.id} className="featured-item">
            <Link to={`/movie/${show.id}`}>
              <div className="category-tag">{show.genre}</div>
              <img src={show.poster} alt={show.title} />
              <h3>{show.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedTVShows;
