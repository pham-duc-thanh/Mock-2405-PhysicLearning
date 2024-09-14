import React from 'react'
import './Favourite_Modal.css'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { FaBookReader, FaGraduationCap } from 'react-icons/fa'

const Favourite_Modal = ({ isOpenFavourite, modal_favouriteRef }) => {
  return (

    isOpenFavourite && (
      <div className='favourite-modal' ref={modal_favouriteRef}>
        <div className='favourite-header'>
          <h4>Yêu thích của bạn</h4>
        </div>
        <hr />
        <div className="favourite-content">
          <a href="#" className='favourite-link'>
            <FaGraduationCap className='icon' />
            <p>Khoá học yêu thích</p>
          </a>
          <a href="#" className='favourite-link' >
            <FaBookReader className='icon' />
            <p>Sách yêu thích</p>
          </a>
        </div>
      </div>
    )

  )
}

export default Favourite_Modal