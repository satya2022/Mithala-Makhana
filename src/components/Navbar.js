import React from 'react';


const Navbar = () => {
  return (
    
    <div className="container">
    <div className="navbar">
      <div className="logo-container">
        <img src="images/logo.png" alt="" className="logo" />
        <div className="logo-text">Darbhanga</div>
      </div>

      <div className="nav-items">
        <div className=""><a href="#home">Home</a></div>
        <div className=""><a href="#Bye">Bye Now</a></div>
        <div className=""><a href="#Why">Why Us</a></div>
        <div className=""><a href="#contactme">Contact Us</a></div>
      </div>
    </div>
  </div>
  );
};

export default   Navbar ; // Export Navbar as a named export
