import React, {useContext} from 'react'
import { FormContext } from './FormContext';

function CourseInfo() {

    const {week, user, changeHandler} = useContext(FormContext);

    return (
        <section className="form-input-fields">

            <div className="form-input-container course-input">
                <label htmlFor="course">What course did you play?</label>    
                <input className="alt-input"
                    autoComplete="off"
                    name="course" 
                    type="text"
                    value={user.course}
                    onChange={ (e) => changeHandler(e)}>
                    
                </input>
                <span className={user.course === "" ? "form-required" : "form-required hidden"}>* Required</span> 
            </div>

            <div className="form-input-container city-input">
                <label htmlFor="city">Enter the city you played</label>
                <input className="alt-input"
                    autoComplete="off" 
                    name="city"
                    type="text" 
                    value={user.city} 
                    onChange={(e) => changeHandler(e)}>
                </input>
                <span className={user.city === "" ? "form-required" : "form-required hidden"}>* Required</span> 
            </div>

            <div className="form-input-container date-input">
                <label htmlFor="dateplayed">Enter the date you played</label>
                <select className="alt-input" id="select-scrollbar" name="dateplayed" value={user.dateplayed} onChange={(e) => changeHandler(e)}>
                    {week.map((weekday, index) => {
                        return (
                            <option key={index} value={weekday}>
                                {weekday}
                            </option>
                        )}
                    )}
                </select>
                
            </div>
            
        </section>
    )
}

export default CourseInfo
