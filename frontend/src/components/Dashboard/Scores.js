import '../../css/Dashboard/Scores.css'
import React, {useContext} from 'react'
import { GolfContext } from './Context/GolfContext'


function Scores() {

    const {score, par, birdie, bogey} = useContext(GolfContext);

    return (
        <ul className="scores-container">

            <li className="scores-item items-bs">
                <p className="score-title">
                    Score  
                </p>
                <p className="item-value">{score}</p>
            </li>

            <li className="scores-item items-bs">
                <p className="score-title">
                    Par  
                </p>
                <p className="item-value">{par}</p>
            </li>

            <li className="scores-item items-bs">
                <p className="score-title">
                    Birdy  
                </p>
                <p className="item-value">{birdie}</p>
            </li>

            <li className="scores-item items-bs">
                <p className="score-title">
                    Bogey  
                </p>
                <p className="item-value">{bogey}</p>
            </li>
            
        </ul>
    )
}

export default Scores
