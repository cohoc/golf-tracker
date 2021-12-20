import '../../css/Log/Log.css'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getLog } from '../../api';
import Placeholder from '../../assets/svg/image-placeholder.svg'
import Scorecard from './Scorecard';
function Log() {

    const {id} = useParams();
    const [log, setLog] = useState([]);

    useEffect( ()=> {
        
        const logHandler = async () => {
            const data = await getLog(id);
            setLog(data);
        }

        logHandler();
    }, [id])

    return (
        <div className="log-content-container">
            <div className="log-content">

                <div className="log-image-container">
                    <img 
                        src={Placeholder}
                        alt="course"
                        width="200"
                        height="200"
                    />
                </div>

                <header className="log-header ">

                    <div className="log-city" >
                        <h3 className="lh-font">
                            COURSE
                        </h3>
                        <p className="lh-subfont">
                            {log.course}
                        </p>
                    </div>

                    <div className="log-course">
                        <h3 className="lh-font">
                            CITY
                        </h3>
                        <p className="lh-subfont">
                            {log.city}
                        </p>
                    </div>

                    <div className="log-course">
                        <h3 className="lh-font">
                            PLAYED
                        </h3>
                        <p className="lh-subfont">
                            {log.date}
                        </p>
                    </div>

                </header>
                <Scorecard log={log}/>
                
            </div>
        </div>
    )
}

export default Log
