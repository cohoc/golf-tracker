import React from 'react'
import Icon from '../../assets/svg/Icon'

function Buttons() {
    return (
        <div className="buttons-container">
            <div className="buttons-heading-container">

                <div className="buttons-heading">
                    <h2>
                        golflog
                    </h2>
                    <span className="header-border"/>
                </div>
                
            </div>

            <div className="buttons-content-container">
                <div className="buttons-content">
                    <div className="content-box">
                        <div className="content-image ">
                            <div className="image-wrapper circle-shadow">
                                <Icon name="golfball"
                                width="70"
                                height="70"
                                />
                            </div>
                        </div>

                        <div className="content-text-wrapper">
                            <p className="content-subheading">
                                Play Your Game
                            </p>
                        </div>

                    </div>
                    
                    <div className="content-box">
                        <div className="content-image ">
                            <div className="image-wrapper circle-shadow">
                                <Icon name="golfhole"
                                width="85"
                                height="85"
                                />
                            </div>
                        </div>

                        <div className="content-text-wrapper">
                            <p className="content-subheading">
                                Log The Data
                            </p>
                        </div>
                        
                    </div>

                    <div className="content-box">
                        <div className="content-image ">
                            <div className="image-wrapper circle-shadow">
                                <Icon name="desktop"
                                    width="70"
                                    height="70"
                                />
                            </div>  
                        </div>

                        <div className="content-text-wrapper">
                            <p className="content-subheading">
                                Watch Your Progress
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Buttons
