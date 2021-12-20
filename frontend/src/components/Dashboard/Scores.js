import '../../css/Dashboard/Scores.css'
import React, {useContext} from 'react'
import { GolfContext } from './Context/GolfContext'


function Scores() {

    const {score, par, birdie, bogey, rounds} = useContext(GolfContext);

    return (
        <ul className="scores-container">

            <li className="scores-item items-bs">
                <div className="score-title-header">
                    <p className="score-title">
                        Score  
                    </p>
                </div>
                

                <div className="item-content">
                    <p className="item-value">
                        {score}
                    </p>
                    <p className="item-desc"> avg of {rounds} rounds played</p>
                </div>

                
            </li>

            <li className="scores-item items-bs">
                <div className="score-title-header">
                    <p className="score-title">
                        Par  
                    </p>
                </div>
                

                <div className="item-content">
                    <p className="item-value">
                        {par}
                    </p>
                    <p className="item-desc"> total of {rounds} rounds played</p>

                </div>
                
            </li>

            <li className="scores-item items-bs">
                <div className="score-title-header">
                    <p className="score-title">
                        Birdy  
                    </p>
                </div>
                
                <div className="item-content">
                    <p className="item-value">
                        {birdie}
                    </p>
                    <p className="item-desc"> total of {rounds} rounds played</p>

                </div>
                
            </li>

            <li className="scores-item items-bs">
                <div className="score-title-header">
                    <p className="score-title">
                        Bogey  
                    </p>
                </div>

                <div className="item-content">
                    <p className="item-value">
                        {bogey}
                    </p>
                    <p className="item-desc"> total of {rounds} rounds played</p>
                </div>
                
            </li>
            
        </ul>
    )
}

export default Scores
