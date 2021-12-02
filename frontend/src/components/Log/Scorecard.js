import '../../css/Log/Scorecard.css'
import React from 'react'

function Scorecard() {
    return (
        <div className="scorecard-container">

            <header className="scorecard-header">
                <h3>Scorecard</h3>
            </header>

            <div className="scorecard-body">
                <div className="scorecard-row hole-row">
                    <ul className="front-row">
                        <li>Hole</li>
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>TOT</li>
                    </ul>
                </div>

                <div className="scorecard-row hole-row">
                    <ul className="front-par">
                        <li>Hole</li>
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>TOT</li>
                    </ul>
                </div>

            </div> 
        </div>
    )
}

export default Scorecard
