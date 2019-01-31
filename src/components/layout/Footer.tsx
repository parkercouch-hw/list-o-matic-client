import * as React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span className="footer-text">
          Created by Doug, Parker, & Tamis &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
