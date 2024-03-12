import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="/"><i className="fab fa-facebook"></i></a>
        <a href="/"><i className="fab fa-instagram"></i></a>
        <a href="/"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
