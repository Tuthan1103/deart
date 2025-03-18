import React from 'react';
import '../styles/Banner.css'; // Đảm bảo import CSS từ đúng thư mục

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Chào mừng đến với Advertising Vietnam</h1>
                <p>Khám phá các chiến dịch quảng cáo sáng tạo và xu hướng mới nhất!</p>
                <button className="banner-btn">Khám phá ngay</button>
            </div>
        </div>
    );
}

export default Banner;
