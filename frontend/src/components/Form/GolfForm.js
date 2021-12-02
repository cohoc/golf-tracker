import React from 'react'
import '../../css/GolfForm.css'
import FormContainer from './FormContainer';
import { FormProvider } from './FormContext';

function GolfForm(props) {

    return (
        <>
            { props.popup &&
            <FormProvider>
                <div className="backdrop">
                    <FormContainer
                    popup={props.popup}
                    setPopup={props.setPopup}
                    />
                </div>
            </FormProvider>
            }
        </>
    )
}

export default GolfForm
