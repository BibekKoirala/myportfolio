// NotFoundPage.js
import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div style={{marginTop: '200px'}} className="not-found-container">
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/myportfolio" className="home-link">Go Back Home</a>
        </div>
    );
};

export default NotFoundPage;
