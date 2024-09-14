import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'


import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import AdvancedCourses from '../components/AdvancedCourses/AdvancedCourses'
import BasicCourses from '../components/BasicCourses/BasicCourses'
import InformationAndAdvice from '../components/InformationAndAdvice/InformationAndAdvice'
import { useNavigate } from 'react-router'
import { useUserContext } from '../context/StoreContext'



const HomePage = () => {

  const { user, setIsLoggedIn } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
      console.log(user);

      navigate('/login');
    }
  }, [user.isLoggedIn, navigate]);







  return (
    <div>
      {/* <Header isLoggedIn={user.isLoggedIn} fullName={user.fullName} setIsLoggedIn={setIsLoggedIn} /> */}
      <Navbar />
      <Slider />
      <AdvancedCourses />
      <BasicCourses />
      {/* <TypicalCourses />
      <Classes /> */}
      <InformationAndAdvice />
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
