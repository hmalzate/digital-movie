import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import MovieList from './pages/movielist';
import MovieDetail from './pages/moviedetail';
import Registration from './components/registration';
import Login from './components/login';
import ContentSection1 from './components/ContentSection1';
import ContentSection2 from './components/ContentSection2';
import Hero from './components/Hero'; // Import the Hero component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero /> {/* Added the Hero component here for the slideshow */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="content-section">
          <ContentSection1 />
          <ContentSection2 />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
