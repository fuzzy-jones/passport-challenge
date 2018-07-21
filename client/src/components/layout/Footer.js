import React from 'react';
import "./styles/Footer.css";

export default () => {
  return (
    <div>
      <footer className="footer">
        Copyright &copy; {new Date().getFullYear()} Fuzzy Jones
      </footer>
    </div>
  )
}
