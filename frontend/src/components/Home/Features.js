import React from 'react'
import Icon from '../../assets/svg/Icon'
import cardone from '../../assets/png/golfer-fairway.jpg'
import cardtwo from '../../assets/png/golfcart.jpg'
import cardthree from '../../assets/png/golf-putting-green-2.jpg'


function Features() {
    return (
        <div className="home-features-container">
            <p className="features-heading">
                Features
            </p>
            
            <div className="features-content-container">
                
                <div className="features-cards">
                    <div className="card">
                        <div className="card-image"
                            style={{backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${cardone})`}}
                        >
                            <div className="card-image-wrapper">
                                <Icon name="summary"
                                    fill="white"
                                    width="65"
                                    height="65"
                                />
                            </div>
                        </div>
                        
                        <div className="card-info">
                            <h3>TRACK YOUR SCORES</h3>
                            <p>
                                golflog tracks and keeps a history 
                                of your scores and important stats 
                                from previous rounds you've played. 
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image"
                            style={{backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${cardtwo})`}}
                        >
                            <div className="card-image-wrapper">
                                <Icon name="mapmarker"
                                    fill="white"
                                    width="65"
                                    height="65"
                                />
                            </div>
                        </div>
                        
                        <div className="card-info">
                            <h3>SEE WHERE YOU PLAY</h3>
                            <p>
                                We build a virtual, interactive
                                map of everywhere you play with 
                                relative information of each course 
                                you play at.
                            </p>
                        </div>
    
                    </div>

                    <div className="card">
                        <div className="card-image"
                            style={{backgroundImage:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${cardthree})`}}
                        >
                            <div className="card-image-wrapper">
                                <Icon name="chart"
                                    fill="white"
                                    width="65"
                                    height="65"
                                />
                            </div>
                        </div>
                        
                        <div className="card-info">
                            <h3>GET INSIGHTS ON YOUR GAME</h3>
                            <p>
                                From your golf data we build impactful analysis 
                                to show what areas of your game need work and how you 
                                can improve as a golfer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>
    )
}

export default Features
