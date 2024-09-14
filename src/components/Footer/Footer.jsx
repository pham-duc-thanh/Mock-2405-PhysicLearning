import React from 'react'
import './Footer.css'

import appStore from '../../assets/app_store.png'
import playStore from '../../assets/play_store.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { IoLocationSharp } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (






    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img alt="" /> */}
          <Link style={{ fontSize: "30px", fontWeight: "600", color: "white" }} to='/'>PhysicLearning</Link>
          <p>
            Trang web học vật lý của chúng tôi được thiết kế với mục tiêu mang đến cho người học một nền tảng học tập phong phú và hiệu quả.
          </p>
          <div className="footer-social-icons">
            <a href="" target="blank_">
              <FaFacebook />
            </a >

            <a href="" target="blank_">
              <FaTwitter />
            </a>
            <a href="" target="blank_">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Về PhysicLearning</h2>
          <ul>
            <li>Liên hệ</li>
            <li>Khoá học</li>
            <li>Giới thiệu</li>
            <li>Góp ý dịch vụ</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Tải ứng dụng</h2>
          <div className="app-download-platforms">
            <img src={appStore} alt="" />
            <img src={playStore} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-coryrignht">Coryright 2024 @ physiclearning.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
