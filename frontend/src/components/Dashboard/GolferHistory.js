import React, {useContext} from 'react'
import { GolfContext } from './Context/GolfContext';

import '../../css/Dashboard/GolferHistory.css'
import {Link} from 'react-router-dom'

function GolferHistory() {

    const {history} = useContext(GolfContext)

    return (
        <div className="golfer-history-container">
            <div className="golfer-history-header">
                <p>Golf History</p>
            </div>
            <div className="golfer-history-table">
                
                <div className="golfer-table-header">
                    <div>DATE PLAYED</div>
                    <div>COURSE</div>
                    <div>1-9</div>
                    <div>10-18</div>
                    <div>SCORE</div>
                </div>
                     
                {(typeof history != 'undefined') ? (
                    <>
                        {history.map((log, index) => {
                            return(
                                <Link to={`/logs/${log._id}`} className="golfer-history-row" key={index}> 
                                    <div>
                                        {log.date}
                                    </div>

                                    <div>
                                        {log.course}
                                    </div>

                                    <div>
                                        {log.frontnine}
                                    </div>

                                    <div>
                                        {log.backnine}
                                    </div>

                                    <div>
                                        {log.total}
                                    </div>
                                </Link>
                            )
                        })}
                    </>
                ) : ('')}
            </div>
        </div>
    )
}

export default GolferHistory
