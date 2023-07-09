import React from "react";
// import Typical from 'react-typical';
import Typed from "typed.js";



  const Herosection = () => {





    React.useEffect(() => {
      var typeData = new Typed(".satya", {
        strings: [
          "Are A Trusted Makhana Manufacturer ",
          //"do Makhana Cultivation Ourselves",
          "have makhana of all size",
          "have good delaviry system",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });
      return () => {
        typeData.destroy();
      };
    }, []);
  











    const [imagesLoaded, setImagesLoaded] = React.useState(false);
  
    React.useEffect(() => {
      const images = document.querySelectorAll('.image');
      let currentImage = 1;
  
      const intervalId = setInterval(() => {
        images[currentImage - 1].style.display = 'none';
        currentImage = (currentImage % images.length) + 1;
        images[currentImage - 1].style.display = 'block';
      }, 7500);
  
      if (images.length > 0) {
        let loadedCount = 0;
        images.forEach((image) => {
          image.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              setImagesLoaded(true);
            }
          };
        });
      }
  
      return () => clearInterval(intervalId);
    }, []);
  



  



  return (
    <div className="hero-section">
      {/* Left Part */}
      <div className="hero-section-left">
        <div className="hero-section-heading">Hi..</div>
        <div className="hero-section-heading hero-section-sub-heading">
          We{`,`}
          <span className="satya"> </span>
        </div>
        <div className="hero-section-description">
          We are one of the leading manufacturers and wholesale suppliers of raw
          Mithala Makhana worldwide.
        </div>
        <div className="btn-pink" id="btn">
          Learn More
        </div>
      </div>

      {/* Right Part */}
      <div className="hero-section-right">
        <div className="user-image">
          <img
            src="images/image3.png"
            className="image"
            width="500"
            height="400"
            alt=""
            loading="lazy"
          />
          <img
            src="images/My project.png"
            className="image"
            width="500"
            height="400"
            alt=""
            loading="lazy"
          />
          <img
            src="images/image2.png"
            className="image"
            width="500"
            height="400"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="absolute byscale">
          <img src="images/bycycal.png" alt="" loading="lazy" />
        </div>
        <div className="absolute heart">
          <img src="images/hart.png" alt="" loading="lazy" />
        </div>
        <div className="absolute gym">
          <img src="images/gym.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
