import React, { useEffect, useState } from 'react'
import './AdvancedCourses.css'


// import { advanceCourses } from '../../data/advanceCourses';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import redHeart from '../../assets/red_heart.png'
import whiteHeart from '../../assets/white_heart.png'
import axios from 'axios';

const AdvancedCourses = () => {



  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/advanceCourses');
        setData(response.data);
        console.log(response.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [changeColor, setChangeColor] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const updatedColors = [...changeColor];
    updatedColors[index] = !updatedColors[index];
    setChangeColor(updatedColors);
  };
  return (

    <div className='advancedCourses'>
      <div className='advancedCourses-title'>
        <h2>Khoá học nâng cao</h2>
      </div>

      <div className='advancedCourses-cart'>
        {data.map((item, index) => (
          <div className='advancedCourses-cart-list' key={index}>
            <div className='advancedCourses-cart-top'>
              <img src={item.image} alt='tan' />
              <div className='advancedCourses-cart-top-content'>
                <h1>{item.title_1}</h1>
              </div>

            </div>
            <div className='advancedCourses-cart-bottom'>
              <div className='top'>
                <a href='#'>{item.title_2}</a>
                <div style={{ cursor: "pointer" }} onClick={() => handleClick(index)} >
                  {changeColor[index] ? (
                    <FaHeart style={{ color: 'red', fontSize: '20px' }} />
                  ) : (
                    <FaRegHeart style={{ color: 'black', fontSize: '20px' }} />
                  )}
                </div>




              </div>

              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div >

  )
}

export default AdvancedCourses
