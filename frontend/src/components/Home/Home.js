import '../../css/Home/Home.css'
import React from 'react'
import HeroVideo from '../../assets/video/green-birdseye.mp4'

import Buttons from './Buttons'
import About from './About'
import Features from './Features'

import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="home-page">
            <div className="home-hero-container">

                <div className="hero-overlay">
                    <video className="hero-video" playsInline autoPlay muted loop>
                        <source src={HeroVideo} type="video/mp4"/>
                    </video>
                </div>

                <div className="home-hero-content">
                    <p id="hero-title">
                        Play your best golf. We handle the rest.
                    </p>
                    <p id="hero-subtitle">
                        Get started tracking your scores and improve 
                        with the data we provide. 
                    </p>
                    <div className="hero-buttons-container">
                        <a className="hero-button outline-w" href="/" title="Learn More">Learn More</a>
                        <Link className="hero-button outline-w" to="/dashboard">Start Logging</Link>
                    </div>
                    
                </div>

            </div>
            <Buttons/>
            <About/>
            <Features/>
   
        </div>
        
    )
}

export default Home
