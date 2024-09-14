import React from 'react'
import './Classes.css'
import { GoRuby } from "react-icons/go";

import { classes } from '../../data_3.js'

const Classes = () => {
  return (
    <div className='classes'>
      <div className='classes-title'>
        <h2>Tất cả lớp học</h2>
      </div>

      <div className='classes-cart'>
        {classes.map((item, index) => (
          <div className='classes-cart-list' key={index}>
            <div className='classes-cart-title'>
              <h3>{item.classes}</h3>
            </div>
            <div className='classes-cart-body'>
              <div className='classes-basic'>
                <div className='classes-basic-title'>
                  <p>{item.title_1}</p>
                </div>
                <div className='classes-basic-btn'>
                  <a href="#">{item.button}</a>
                </div>
              </div>

              <div className='classes-advanced'>
                <div className='classes-advanced-title'>
                  <p>{item.title_2}</p>
                </div>
                <div className='classes-advanced-icon'>
                  <GoRuby style={{ color: "red", fontSize: "22px" }} />
                  <p>VIP</p>
                </div>
                <div className='classes-advanced-btn'>
                  <a href="#">{item.button}</a>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Classes