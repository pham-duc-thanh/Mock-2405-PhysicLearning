import React, { useEffect, useState } from 'react'
import './Slider.css'
// import images1 from '../../assets/slider_images/slider1.png';
// import images2 from '../../assets/slider_images/slider2.png';
// import images3 from '../../assets/slider_images/slider4.png';
import { sliderContent } from '../../data/Slider.js'

import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === sliderContent.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function showPrevImage() {
    setCurrentImage(index => {
      if (index === 0) return sliderContent.length - 1
      return index - 1;
    })
  }

  function showNextImage() {
    setCurrentImage(index => {
      if (index === sliderContent.length - 1) return 0
      return index + 1;
    })
  }



  return (
    <div className="slider-background">
      <div className="slider">
        <div className='slider-left'>
          <img src={sliderContent[currentImage].image} alt="Slider" className="slider-image" style={{ transform: `${-100 * currentImage}%` }}   /* thêm*/ />
          <button onClick={showPrevImage} className='slider-btn'>
            <MdOutlineArrowBackIosNew />
          </button>
          <button onClick={showNextImage} className='slider-btn'>
            <MdOutlineArrowForwardIos />
          </button>
          <div style={{
            position: "absolute",
            bottom: "0.5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: "0.25rem"
          }} >
            {sliderContent.map((_, index) => (
              <button key={index} className='img-slider-dot-btn' onClick={() => setCurrentImage(index)}>
                {index === currentImage ? <FaCircle /> : <FaRegCircle />}
              </button>
            ))}
          </div>
          <div className="slider-content">
            <h1>{sliderContent[currentImage].title}</h1>
            <p>{sliderContent[currentImage].description}</p>
            <button>{sliderContent[currentImage].buttonText}</button>
          </div>
        </div>

      </div>

      <div className='slider-right'>

      </div>
    </div>
  );
}

export default Slider;