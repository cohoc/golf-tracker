import React, {useState} from 'react'

import Sidemenu from './Sidemenu'
import Subheader from './Subheader'
import Scores from './Scores'
import GolferHistory from './GolferHistory'
import GolfForm from '../Form/GolfForm'


import hamburger from '../../assets/svg/hamburger.svg'
import '../../css/Dashboard/Dashboard.css'
import { GolfProvider } from './Context/GolfContext'


function Dashboard() {

    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);

    return (
        <div className="dashboard-container">

            <GolfProvider>
                <Sidemenu open={open} />
                <main className="dashboard-content-container">

                    <div className="dashboard-content">
                        <div className="dashboard-topbar">
                            <button 
                                className="hamburger-container" 
                                onClick={() => setOpen(!open)} >

                                <img src={hamburger} alt="ham" />

                            </button>  
                            <button 
                                className="dashboard-form-container"
                                onClick={() => setPopup(!popup)}> 
                                <p> + </p>
                                <p> New Log </p>
                            </button>
                        </div>

                        <Subheader />
                        <Scores />
                        <GolferHistory />

                    </div>
                </main>
            </GolfProvider>
            
            <GolfForm popup={popup} setPopup={setPopup}/>
        </div>
    )
}

export default Dashboard
