import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if (response.ok) {
          const data = await response.json();
          const movie = data.movies.find(movie => movie.id === parseInt(id)) || data.tvshows.find(show => show.id === parseInt(id));
          setMovie(movie);
        } else {
          setError('Movie or TV Show not found');
        }
      } catch (error) {
        console.error('Error fetching movie or TV show:', error);
        setError('Error fetching movie or TV show');
      }
    };
  
    fetchData();
  }, [id]);
  

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <img src={movie.poster} alt={movie.title} className="movie-detail-poster" />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <div className="movie-detail-actions">
            <button className="rent-button">Rent {movie.priceRent}</button>
            <button className="buy-button">Buy {movie.priceBuy}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
