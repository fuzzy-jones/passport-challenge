import React from 'react';
import "./styles/Footer.css";

export default () => {
  return (
    <div>
      <footer className="footer">
        {/* does copyright for current year */}
        Copyright &copy; {new Date().getFullYear()} Fuzzy Jones
      </footer>
    </div>
  )
}
