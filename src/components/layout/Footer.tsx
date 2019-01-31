import * as React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span className="footer-text">
          Created by Parker Couch &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
