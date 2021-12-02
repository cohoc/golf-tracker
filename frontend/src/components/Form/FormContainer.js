import React, {useState, useContext} from 'react'
import CourseInfo from './CourseInfo';
import ShotInfo from './ShotInfo';
import Confirm from './Confirm';

import checkmark from '../../assets/svg/checkmark.svg'
import golfcart from '../../assets/svg/golfcart.svg'
import golfhole from '../../assets/svg/golfhole.svg'
import { FormContext } from './FormContext';

function FormContainer(props) {

    const {submitHandler} = useContext(FormContext)
    const [step, setStep] = useState(0);

    return (
        <form className="form-container" onSubmit={ (e) => {submitHandler(e); props.setPopup(!props.popup)} }>
            <div className="form-header">
                <img src={golfhole} className={ step === 0 ? "form-img img-active" : "form-img"} id="golfhole" alt="golfhole" width="50px" height="50px" ></img>
                <img src={golfcart} className={ step === 1 ? "form-img img-active" : "form-img"} id="golfcart" alt="golfcart" width="75px" height="75px" ></img>
                <img src={checkmark} className={ step === 2 ? "form-img img-active" : "form-img"} id="checkmark" alt="checkmark" width="50px" height="50px" ></img>
            </div>

            { step === 0 && 
                <>
                    <CourseInfo/> 
                </>  
            }

            { step === 1 && 
                <>
                    <ShotInfo/>
                </>
            }

            { step === 2 && 
                <>
                    <Confirm/>
                </>
            }
            
            <div className="form-submit-container">

                { step > 0 &&
                <button 
                    type="button" 
                    id="form-prev-page"
                    onClick={ () => setStep(step-1)}>
                    Prev
                </button>
                }

                { step < 1 &&
                <button 
                    type="button"
                    id="form-cancel"
                    onClick={ () => props.setPopup(!props.popup)}>
                    Cancel
                </button>
                }

                { step < 2 &&
                <button 
                    type="button" 
                    id="form-next-page"
                    onClick={ () => setStep(step+1)}>
                    Next
                </button>
                }

                { step === 2 &&
                <button 
                    type="submit"
                    id="form-submit">
                    Submit
                </button>
                }

            </div>
        </form>
    )
}

export default FormContainer
