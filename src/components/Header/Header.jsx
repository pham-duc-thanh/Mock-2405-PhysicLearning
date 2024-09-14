import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { FaRegHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Notification_Modal from '../Notification_Modal/Notification_Modal';
import UserProfile_Modal from '../UserProfile_Modal/UserProfile_Modal';

import Favourite_Modal from '../Favourite_Modal/Favourite_Modal';
import { useUserContext } from '../../context/StoreContext';
import SearchBar from '../SearchBar/SearchBar';



const Header = () => {


  const { user, setIsLoggedIn } = useUserContext();

  const [searchValue, setSearchValue] = useState('');

  const isLoggedIn = user.isLoggedIn;
  const fullName = user.fullName;

  const inputElement = useRef();
  const [isOpenUserProfile, setIsOpenUserProfile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSearch, setIsModalSearch] = useState(false);
  const [isOpenFavourite, setIsOpenFavourite] = useState(false);
  const modal_NotificationRef = useRef();
  const notification_IconRef = useRef();
  const user_ProfileRef = useRef();
  const modal_userProfileRef = useRef();
  const favourite_IconRef = useRef();
  const modal_favouriteRef = useRef();
  const searchRef = useRef();
  const modal_searchResultRef = useRef();

  const [results, setResults] = useState([]);

  const handleInputSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    console.log('searchValue...', searchValue);
  }, [searchValue]);

  const focusInput = (e) => {
    e.preventDefault();
    inputElement.current.focus();
  };

  const toggleMenu = () => {
    setIsOpenUserProfile(!isOpenUserProfile);
  };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const toggleModal = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/notification') {
      setIsModalOpen(!isModalOpen);
    }
  };

  const toggleFavourite = () => {
    setIsOpenFavourite(!isOpenFavourite);
  };

  const handleOpenAndCloseUserProfile = (e) => {
    if (
      (user_ProfileRef.current && !user_ProfileRef.current.contains(e.target)) &&
      (modal_userProfileRef.current && !modal_userProfileRef.current.contains(e.target))
    ) {
      setIsOpenUserProfile(false);
    }
  };

  const handleClickOutsideNotification = (e) => {
    if (
      (notification_IconRef.current && !notification_IconRef.current.contains(e.target)) &&
      (modal_NotificationRef.current && !modal_NotificationRef.current.contains(e.target))
    ) {
      setIsModalOpen(false);
    }
  };

  const handleOpenAndCloseFavourite = (e) => {
    if (
      (favourite_IconRef.current && !favourite_IconRef.current.contains(e.target)) &&
      (modal_favouriteRef.current && !modal_favouriteRef.current.contains(e.target))
    ) {
      setIsOpenFavourite(false);
    }
  };

  const handleOpenAndCloseSearch = (e) => {
    if (
      (searchRef.current && !searchRef.current.contains(e.target))
    ) {
      setIsModalSearch(false);
    }
  };




  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotification);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOpenAndCloseUserProfile);

    return () => {
      document.removeEventListener("mousedown", handleOpenAndCloseUserProfile);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOpenAndCloseFavourite);

    return () => {
      document.removeEventListener("mousedown", handleOpenAndCloseFavourite);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOpenAndCloseSearch);

    return () => {
      document.removeEventListener("mousedown", handleOpenAndCloseSearch);
    };
  }, []);



  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn({ isLoggedIn: false, fullName: '' });
    navigate('/login');
  };

  return (
    <div className="background">
      <div className='header'>
        {/* <div className='header-logo' >
          Physic Learning
        </div> */}

        <Link to='/' className='header-logo' >
          Physic Learning
        </Link>

        {/* <div className='header-search'>
          <form>
            <input
              type="text"
              placeholder="Tìm kiếm khoá học, bài tập, kiểm tra..." name="searchValue"
              value={searchValue}
              onChange={handleInputSearch}
              ref={inputElement} />
            <button type="submit" onClick={focusInput}> <FaSearch /></button>
          </form>
        </div> */}

        <div className="header-search" rel={searchRef}>
          <SearchBar />
          {/* <SearchResultsList results={results} /> */}
        </div>




        {isLoggedIn ? (
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
        ) : (
          <div className="navbar-right">
            <Link to='/login'>
              <button className='login'>Đăng nhập</button>
            </Link>
            <Link to='/register'>
              <button className='register'>Đăng ký</button>
            </Link>
          </div>
          // <></>
        )}
      </div>
    </div >
  );
}

export default Header;