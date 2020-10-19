import React from 'react';
import logo from './logo.svg';
import './App.css';

function MainPage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Trying out new webpage
                </p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click for a suprise
                </a>
            </header>
        </div>
    );
}

export default MainPage;