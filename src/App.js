import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import './styles/App.css'; // Đảm bảo file App.css được import đúng

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <ArticleList />
            <Footer />
        </div>
    );
}

export default App;
