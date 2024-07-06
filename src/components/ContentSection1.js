import React from 'react';
import '../App.css';

const ContentSection1 = () => (
  <div className="content-item">
    <img src="/whats-new.jpg" alt="What's New" className="content-img" />
    <div className="content-info">
      <h2>What's New</h2>
      <p>Check out the latest movies and TV shows added to our collection.</p>
      <button className="content-link" onClick={() => alert('Learn More about What\'s New')}>Learn More</button>
    </div>
  </div>
);

export default ContentSection1;
