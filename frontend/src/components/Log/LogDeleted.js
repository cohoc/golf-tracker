import '../../css/Log/LogDeleted.css'
import {ReactComponent as LogPlaceholder} from '../../assets/svg/golfer.svg'
import React from 'react'

function LogDeleted() {
    return (
        <div className="log-deleted-container">
            <div className="log-deleted-content">
                <div className="log-placeholder">
                    <LogPlaceholder 
                        width="100"
                        height="100"
                        fill="rgb(120,120,120)"
                    />
                </div>
                <p>The log you are looking for is in another fairway</p>
            </div>
        </div>
    )
}

export default LogDeleted
