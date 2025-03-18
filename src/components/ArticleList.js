import React from 'react';
import '../styles/ArticleList.css'; // Đảm bảo import CSS từ đúng thư mục

const articles = [
    { title: "Creative Campaign 1", description: "Mô tả bài viết 1", image: "https://via.placeholder.com/400" },
    { title: "Creative Campaign 2", description: "Mô tả bài viết 2", image: "https://via.placeholder.com/400" },
    { title: "Creative Campaign 3", description: "Mô tả bài viết 3", image: "https://via.placeholder.com/400" },
];

function ArticleList() {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <div key={index} className="article-item">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <div className="article-content">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href="/" className="article-link">Đọc thêm</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;
