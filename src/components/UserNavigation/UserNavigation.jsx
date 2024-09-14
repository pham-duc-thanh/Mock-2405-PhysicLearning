// UserNavigation.jsx
import React from 'react';
import { FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const UserNavigation = ({ toggleFavourite, favourite_IconRef, toggleModal, notification_IconRef, isOpenFavourite, isModalOpen, handleLogout }) => {
  return (
    <div className="user-info">

      <div onClick={toggleFavourite} ref={favourite_IconRef}>
        <FaRegHeart style={{ cursor: "pointer", display: "flex", alignItems: "center" }} />
      </div>

      <Favourite_Modal isOpenFavourite={isOpenFavourite} modal_favouriteRef={modal_favouriteRef} />


      <div className='notification-icon' style={{ cursor: "pointer", display: "flex", alignItems: "center" }} ref={notification_IconRef} onClick={toggleModal} >
        <IoNotifications />
        <span>17</span>
      </div>

      <Notification_Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleModal={toggleModal} modal_NotificationRef={modal_NotificationRef} parentRef={notification_IconRef} />

      <FaShoppingCart />


      {/* <div > */}
      <span style={{ cursor: "pointer", position: "relative" }} onClick={toggleMenu} ref={user_ProfileRef} className="user-name" ><FaUser /></span >
      {/* </div> */}

      <UserProfile_Modal isOpenUserProfile={isOpenUserProfile} toggleMenu={toggleMenu} modal_userProfileRef={modal_userProfileRef} handleLogout={handleLogout} />
    </div>
  );
}

export default UserNavigation;