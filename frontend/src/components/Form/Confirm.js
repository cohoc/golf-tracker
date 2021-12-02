import React, {useContext} from 'react'
import { FormContext } from './FormContext'

function Confirm() {

    const {user} = useContext(FormContext);

    return (
        <section className="form-result-fields">
            <div className="form-preview-container">

                <ul className="form-preview">
                    <li className="preview-item">
                        <p>Course:</p>
                        <p>{user.course}</p>
                    </li>

                    <li className="preview-item">
                        <p>City:</p>
                        <p>{user.city}</p>
                    </li>

                    <li className="preview-item">
                        <p>Date Played:</p>
                        <p>{user.dateplayed}</p>
                    </li>

                    <span className="form-divider"></span>

                    <li className="preview-item">
                        <p>Teebox:</p>
                        <p>{user.teebox}</p>
                    </li>

                    <li className="preview-item">
                        <p>Front 9:</p>
                        <p>{user.front}</p>
                    </li>

                    <li className="preview-item">
                        <p>Back 9:</p>
                        <p>{user.back}</p>
                    </li>

                    <li className="preview-item">
                        <p>18 Holes:</p>
                        <p>{user.total}</p>
                    </li>

                    <span className="form-divider"></span>

                    <li className="preview-item">
                        <p>Par:</p>
                        <p>{user.par}</p>
                    </li>

                    <li className="preview-item">
                        <p>Birdie:</p>
                        <p>{user.birdie}</p>
                    </li>

                    <li className="preview-item">
                        <p>Bogey:</p>
                        <p>{user.bogey}</p>
                    </li>

                    <li className="preview-item">
                        <p>Bogey+:</p>
                        <p>{user.bogeyex}</p>
                    </li>

                </ul> 

            </div>    
        </section>
    )
}

export default Confirm
