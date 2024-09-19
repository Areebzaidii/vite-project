import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttnnn from './btncomponent';

function Navbar() {
  const [nevbarcolor, setNevbarColor] = useState("light");
  const [bhtnheading, setBhtnHeading] = useState("Enable Dark mode");
  const [textColor, setTextColor] = useState("dark");
  const [bgbutn, setBgButn] = useState("#212529");
  const [butnalll, setButnAll] = useState("light");

  const colorChangeHandler = () => {
    if (bgbutn === '#212529') {
      setBgButn("white");
      setNevbarColor("dark");
      setTextColor("light");
      setBhtnHeading("Disable Dark mode");
      setButnAll("dark");
      document.body.style.backgroundColor = "#424a52";
    } else {
      setBgButn("#212529");
      setNevbarColor("light");
      setTextColor("dark");
      setBhtnHeading("Enable Dark mode");
      setButnAll('light');
      document.body.style.backgroundColor = "#eceaea";
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-${nevbarcolor}`}>
      <div className="container-fluid">
        <a href="#" className={`navbar-brand text-${textColor}`}>
          Text Editor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/gellery" style={{fontWeight:"600"}} className={`nav-link active text-${textColor}`}>
                Photo Gellery
              </Link>
            </li>
            <li className="nav-item" style={{ marginTop: "5px" }}>
              <Buttnnn
                onClick={colorChangeHandler}
                prptext={bhtnheading}
                bgclbt={bgbutn}
              />
            </li>
            <li className="nav-item" style={{ marginTop: "-4px" }}>
            <Link to="/" style={{fontWeight:"600"}} className={`nav-link active text-${textColor}`}>
            < Buttnnn
                onClick={null}
                prptext={'Go to home'}
                bgclbt={bgbutn}
              /> 
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
