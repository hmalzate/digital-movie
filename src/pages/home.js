import React from 'react';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/featuredtvshows';
import '../App.css';

function Home() {
  return (
    <div>
      <section className="hero-banner-bottom">
        <h1>Welcome</h1>
        <p>Watch the best movies and TV shows from 2021.</p>
      </section>
      <FeaturedMovies />
      <FeaturedTVShows />
    </div>
  );
}

export default Home;
