// Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='header-logo'>
      Physic Learning
    </Link>
  );
}

export default Logo;