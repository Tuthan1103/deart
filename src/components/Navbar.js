import React from 'react';
import '../styles/Navbar.css';
import logo from '../image/logo1.png';

// Import icon từ react-icons (nếu muốn icon cho Portfolio)
import { FaPodcast, FaNewspaper, FaFireAlt, FaBriefcase } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Phần trên của Navbar */}
      <div className="navbar-top">
        <ul className="navbar-links">
          {/* Logo (item 1) */}
          <li>
            <img src={logo} alt="Logo" className="logo-img" />
          </li>
          
          {/* Podcast (item 2) */}
          <li>
            <FaPodcast className="icon" />
            <a href="/">Podcast</a>
          </li>

          {/* Mới nhất (item 3) */}
          <li>
            <FaNewspaper className="icon" />
            <a href="/">Mới nhất</a>
          </li>

          {/* Sôi nổi (item 4) */}
          <li>
            <FaFireAlt className="icon" />
            <a href="/">Sôi nổi</a>
          </li>

          {/* Portfolio (item 5) */}
          <li>
            <FaBriefcase className="icon" />
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </div>

      {/* Phần dưới của Navbar (nếu có) */}
      <div className="navbar-bottom">
        <ul className="navbar-bottom-links">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/">Dự án</a></li>
          <li><a href="/">Liên hệ</a></li>
          <li><a href="/">Giới thiệu</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
