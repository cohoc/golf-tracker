import React from 'react'
import './css/Header.css'

function Header() {
    return (
        <nav className="header-container">
            <header className="header-content">
                <div className="logo-container">
                    <a className="logo" href="/">
                        <h1 id="logo-text">
                            golflog
                        </h1>
                    </a>
                </div>
                
            </header>
            
        </nav>
    )
}

export default Header
