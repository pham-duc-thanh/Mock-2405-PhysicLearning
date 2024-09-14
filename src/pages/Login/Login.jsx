import React, { useEffect, useState } from 'react';
import './Login.css';
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/StoreContext';


const Login = () => {

  const { url, setIsLoggedIn } = useUserContext(); // Destructure setIsLoggedIn from context

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    sessionStorage.clear();
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    // axios.get(`${url}/user`)
    //   .then(req => {
    //     req.data.map(user => {
    //       if (user.email === email) {
    //         if (user.password === password) {
    //           toast.success('Đăng nhập thành công!')
    //           sessionStorage.setItem('email', user.email);
    //           setIsLoggedIn({ isLoggedIn: true, fullName: user.fullName });
    //           console.log("user...", user);


    //           navigate('/');
    //         } else if (user.password !== password) {
    //           toast.error('Nhập sai..')
    //         }
    //       }
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err);

    //   })

    axios.get(`${url}/user`)
      .then(req => {
        const user = req.data.find(user => user.email === email);

        if (user) {
          if (user.password === password) {
            toast.success('Đăng nhập thành công!');
            sessionStorage.setItem('email', user.email);
            setIsLoggedIn({ isLoggedIn: true, fullName: user.fullName });
            console.log("user...", user);
            navigate('/');
          } else {
            toast.error('Nhập sai..');
          }
        } else {
          toast.error('Nhập sai...');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }





  return (
    <div className="login-container">
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

      <form action="" className="login-form" onSubmit={onSubmit}>
        <div>
          <h2>Đăng nhập</h2>
        </div>

        <div className="input-container">
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-box">
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
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
        </div>

        <div className="remember">
          <input type="checkbox" required />
          <p>Remember me</p>
        </div>

        <button type="submit">Đăng nhập</button>

        <div className="register-link">
          <p>Tạo tài khoản mới? <Link to="/register">Đăng ký</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;