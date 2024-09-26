import React, { useState } from 'react';

const Navbar = ({ onCitySearch }) => {
    const [city, setCity] = useState('');

    const navbarStyle = {
        background: 'linear-gradient(90deg, rgba(34, 34, 34, 1) 0%, rgba(0, 0, 0, 1) 100%)',
        padding: '10px'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 800,
        fontSize: '18px',
        margin: '0 15px'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCitySearch(city); // Call the function passed as prop with the city
        setCity(''); // Clear the input after submission
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://github.com/Jinang12/Weather-App/blob/main/index.html" style={linkStyle}><span>Weather4U</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://github.com/Jinang12/Weather-App/blob/main/index.html" style={linkStyle}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jinang12/Weather-App/blob/main/index.html" style={linkStyle}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jinang12/Weather-App/blob/main/index.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jinang12/Weather-App/blob/main/index.html" style={linkStyle}>Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input 
                            id="search" 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} // Update city state on input change
                        />
                        <button id="searchButton" className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
