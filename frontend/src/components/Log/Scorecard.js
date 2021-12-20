import '../../css/Log/Scorecard.css'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Icon from '../../assets/svg/Icon'
import {deleteLog} from '../../api'

function Scorecard(props) {

    const history = useHistory();
    const [popup, setPopup] = useState(false);

    const deleteHandler = async (id) =>{
        await deleteLog(id);
        history.replace("/logs/log-not-found");
        history.push("/dashboard");
    }

    return (
        <div className="scorecard-container">

            <header className="scorecard-header">
                <h3>Scorecard</h3>

                <div className="scorecard-button-container">
                    <button className="scorecard-button">
                        <Icon
                            name="edit"
                            width="20"
                            height="20"
                        />
                    </button>

                    <button 
                        className="scorecard-button"
                        onClick={ () => setPopup(!popup) }
                    >
                        <Icon
                            name="delete"
                            width="30"
                            height="30"
                        />                    
                    </button>
                </div>
                

            </header>

            <div className="scorecard-body">
                <div className="scorecard-row hole-row">
                    <ul className="front-row">
                        <li>Hole</li>
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
                        <li>Par</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li></li>
                    </ul>
                </div>

            </div> 

            { popup && 
                <div className="delete-popup-container">
                    <div className="delete-popup">
                        <div className="delete-body">
                            <p>Would you like to delete this current log?</p>
                        </div>
                        <div className="delete-buttons-container">
                            <button 
                                className="cancel-button"
                                onClick={ () => setPopup(!popup) }
                            >
                                Cancel
                            </button>

                            <button 
                                className="delete-button"
                                onClick={ () => deleteHandler(props.log._id) }
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Scorecard
