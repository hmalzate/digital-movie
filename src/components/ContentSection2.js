import React from 'react';
import '../App.css';

const ContentSection2 = () => (
  <div className="content-item">
    <img src="/inception.jpg" alt="Inception" className="content-img" />
    <div className="content-info">
      <h2>Inception</h2>
      <p>Discover the mind-bending world of Inception, available now on our platform.</p>
      <button className="content-link" onClick={() => alert('Learn More about Inception')}>Learn More</button>
    </div>
  </div>
);

export default ContentSection2;
