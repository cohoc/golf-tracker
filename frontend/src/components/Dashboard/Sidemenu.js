import React from 'react'
import '../../css/Dashboard/Sidemenu.css'
import Icon from '../../assets/svg/Icon'

function Sidemenu(props) {
    return (
        <div className={props.open ? "sidemenu-container" : "sidemenu-container toggle"}>

            <div className="user-container">

            </div>

            <span id="divider"></span>

            <ul className="nav-items-container">

                <li className="nav-list-item" >
                    <a href="/" >
                        <div className="list-item-logo">
                            <Icon name="dashboard" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div>
                        Dashboard
                    </a>
                </li>

                <li className="nav-list-item" >
                    <a href="/">
                        <div className="list-item-logo">
                            <Icon name="chart" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div>
                        Progress
                    </a>
                </li>

                <li className="nav-list-item" >
                    <a href="/">
                        <div className="list-item-logo">
                            <Icon name="video" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div>
                        Videos
                    </a>
                </li>

                <li className="nav-list-item" >
                    <a href="/">
                        <div className="list-item-logo">
                            <Icon name="summary" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div>
                        Summary
                    </a>
                </li>

                <li className="nav-list-item" >
                    <a href="/">
                        <div className="list-item-logo">
                            <Icon name="flag" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div> 
                        Courses
                    </a>
                </li>

                <li className="nav-list-item" >
                    <a href="/">
                        <div className="list-item-logo">
                            <Icon name="history" 
                                fill="white" 
                                width="25" 
                                height="25"
                            />
                        </div>
                        History
                    </a>
                </li>

            </ul>

            <div className="nav-settings">

            </div>

        </div>
    )
}

export default Sidemenu
