import React from 'react';
import '../styles/Footer.css'; // Đảm bảo import CSS từ đúng thư mục

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/">Giới thiệu</a>
                <a href="/">Điều khoản sử dụng</a>
                <a href="/">Liên hệ</a>
            </div>
            <div className="footer-socials">
                <a href="/">Facebook</a>
                <a href="/">Twitter</a>
                <a href="/">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
