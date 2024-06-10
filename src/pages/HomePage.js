import React from 'react';
import { useNavigate } from 'react-router-dom';
// import image from '../images/image1.jpg'
import '../styles/HomePage.css'



const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <h1>Landmark</h1>
            <div className="button-container">
                <button onClick={() => handleClick('./FileAttach')} className="button exist-user">enter </button>
            </div>
        </div>
    );
};

export default HomePage;