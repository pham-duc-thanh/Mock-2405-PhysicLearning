import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Register from './pages/Register/Register';
import HomePage from './pages/HomePage';
import Login from './pages/Login/Login';
import Layout from './Layout';
import ErrorBoundary from './ErrorBoundary';
import Notification_ShowAll from './pages/Notification_ShowAll/Notification_ShowAll';
import FavoriteCourse from './pages/FavoriteCourse/FavoriteCourse';

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route
          path="/login"
          element={<Login />} index />



        <Route
          path="/register"
          element={<Register />} />


        {/* <Route
          path="/search"
          element={<SearchBar />} /> */}

        <Route
          path='/'
          element={<Layout><HomePage /></Layout>} />

        <Route
          path='/notification'
          element={<Layout><ErrorBoundary><Notification_ShowAll /></ErrorBoundary></Layout>} />

        <Route
          path='/favoritecourse'
          element={<Layout><ErrorBoundary><FavoriteCourse /></ErrorBoundary></Layout>} />
      </Routes>
    </div>
  );
}

export default App;