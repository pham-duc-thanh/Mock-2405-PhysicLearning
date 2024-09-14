import React, { useEffect, useState } from 'react'
import './TypicalCourses.css'

import { typicalCourses } from '../../data_2.js'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TypicalCourses = () => {
  const [nextImage, setNextImage] = useState(0);



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNextImage((prev) => {

  //       let nextIndex = prev + 1;
  //       if (nextIndex >= typicalCourses.length) {
  //         nextIndex = 0;
  //       }
  //       return nextIndex;
  //     });
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='typicalCourses'>
      <div className='typicalCourses-title'>
        <h2>Khoá học tiêu biểu</h2>
      </div>

      <div>
        <Slider {...settings}>
          {typicalCourses.map(item => (
            <div className='typicalCourses-cart'>
              <div className='typicalCourses-cart-top'>
                <img src={item.image} alt={item.title_1} />
                <div className='typicalCourses-cart-top-content'>
                  <h1>{item.title_1}</h1>
                  <p>{item.description}</p>
                </div>

              </div>
              <div className='typicalCourses-cart-bottom'>
                <h3>{item.title_2}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>


    </div>
  )
}

export default TypicalCourses
