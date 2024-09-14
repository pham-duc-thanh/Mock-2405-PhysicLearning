import React, { useEffect, useState } from 'react';
import './Register.css';
import { IoEyeOutline, IoEyeOffSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    setValues({
      email: '',
      fullName: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      toast.error('Mật khẩu và xác nhận mật khẩu phải trùng nhau.');
      return;
    }

    axios
      .post('http://localhost:3000/user', values)
      .then((response) => {
        console.log('data', response);

        toast.success('Đăng kí thành công');

        handleClose();

        navigate('/login');
      })
      .catch((err) => {
        toast.error('Thất bại: ' + err.message);
      });
  };

  return (
    <div className="register-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Link to="/" className="back-button">
        <FaBookReader />
        PhysicLearning
      </Link>

      <form action="" className="register-form" onSubmit={onSubmit}>
        <div>
          <h2>Đăng kí</h2>
        </div>

        <div className="input-container">
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              onChange={handleInput}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-box">
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={handleInput}
                placeholder="Mật khẩu"
                required
              />
              {showPassword ? (
                <IoEyeOutline className="password-icon" onClick={toggleShowPassword} />
              ) : (
                <IoEyeOffSharp className="password-icon" onClick={toggleShowPassword} />
              )}
            </div>
          </div>

          <div className="input-box">
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                onChange={handleInput}
                placeholder="Nhập lại mật khẩu"
                required
              />
              {showPassword ? (
                <IoEyeOutline className="password-icon" onClick={toggleShowPassword} />
              ) : (
                <IoEyeOffSharp className="password-icon" onClick={toggleShowPassword} />
              )}
            </div>
          </div>
        </div>

        <button type="submit">Đăng kí</button>

        <div className="login-link">
          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;