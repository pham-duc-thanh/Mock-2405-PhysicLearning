import React from 'react'
import './UserProfile_Modal.css'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useUserContext } from '../../context/StoreContext'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const UserProfile_Modal = ({ isOpenUserProfile, toggleMenu, modal_userProfileRef, handleLogout }) => {

  const { user } = useUserContext();
  const fullName = user.fullName;

  return (


    isOpenUserProfile && (
      <div className='sub-menu' ref={modal_userProfileRef} >
        <div className='sub-menu-user-info'>
          <h4>{fullName}</h4>
        </div>
        <hr />
        <a href="#" className='sub-menu-link'>
          <CgProfile className='icon' />
          <p>Thông tin cá nhân</p>
          {/* <MdOutlineArrowForwardIos /> */}
        </a>
        <a href="#" className='sub-menu-link' onClick={handleLogout}>
          <RiLogoutBoxRLine className='icon' />
          <p>Đăng xuất</p>
          {/* <MdOutlineArrowForwardIos /> */}
        </a>
      </div >
    )

  )
}

export default UserProfile_Modal
