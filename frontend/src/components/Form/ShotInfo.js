import React, {useState, useContext} from 'react'
import {FormContext} from './FormContext'

function ShotInfo() {

    const {user, changeHandler, totalHandler} = useContext(FormContext);
    const [active, setActive] = useState(0);

    return (
        <section className="form-input-fields">

            <div className="form-input-container teebox-input">
                <label htmlFor="teebox">Select a teebox</label>
                <select className="alt-input" name="teebox" value={user.teebox} onChange={(e) => changeHandler(e)}>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                </select>
            </div>

            <div className="form-input-container scores-input">
                <ul className="alt-scores-container">
                    <button
                        type="button"
                        onClick={ ()=> setActive(0) } 
                        className={ active === 0 ? "button-toggle active" : "button-toggle"}>
                        Front 9
                    </button>
                
                    <button 
                        type="button"
                        onClick={ ()=> setActive(1) } 
                        className={ active === 1 ? "button-toggle active" : "button-toggle"}>
                        Back 9
                    </button>

                    <button 
                        type="button"
                        onClick={ ()=> setActive(2) } 
                        className={ active === 2 ? "button-toggle active" : "button-toggle"}>          
                        18 Holes
                    </button>
                </ul>

                {active === 0 &&
                <input type="number" 
                    className="front9-score-input alt-input"
                    placeholder="Score for the front 9 ..." 
                    name="front"
                    value={user.front > 0 ? user.front : ''}
                    onChange={ (e) => changeHandler(e)}>
                </input>
                }
                

                {active === 1 &&
                <input type="number" 
                    className="back9-score-input alt-input"
                    placeholder="Score for the back 9 ..." 
                    name="back"
                    value={user.back > 0 ? user.back : ''}
                    onChange={ (e) => changeHandler(e)}>
                </input>
                }
                
                {active === 2 &&
                <input type="number" 
                    className="total-score-input alt-input"
                    placeholder="Score through 18 holes ..."
                    name="total" 
                    value={ user.total }
                    onChange={ (e) => totalHandler(e)}>
                </input>
                }  

                <span className={( user.front === "" && user.back === "" ) ? "form-required " : "form-required hidden"}>
                    * Required
                </span> 

            </div>


            <div className="form-shots-container">
                <div className="golf-shots-counter">

                    {(user.front < 25 && user.back < 25 && user.total< 25) 
                    && <p>0 of {user.format} shots left</p> }

                    {((user.front > 25 || user.back > 25) && user.total < 25) 
                    && <p>{user.totalshots} of {user.format} shots left</p> }

                    {(user.total > 25) 
                    && <p>{user.totalshots} of {user.format} shots left</p> }

                </div>

                <div className="shot-type-container">
                    <div className="golf-shot">
                        <label className="form-label" htmlFor="par">
                            Par 
                        </label>
                        <input className="input"
                            name="par" 
                            id="golfscore"
                            type="number"
                            min="0" 
                            max={(user.totalshots === user.format) ? user.par : 18 }
                            placeholder="0"
                            value={user.par}
                            onChange={ (e) => changeHandler(e)}>
                        </input>
                    </div>

                    <div className="golf-shot">
                        <label className="form-label" htmlFor="birdie">
                            Birdie 
                        </label>
                        <input className="input"
                            name="birdie" 
                            id="golfscore"
                            type="number"
                            min="0" 
                            max={(user.totalshots === user.format) ? user.birdie : 18 }
                            placeholder="0"
                            value={user.birdie}
                            onChange={ (e) => changeHandler(e)}>
                        </input>
                    </div>
                    
                    <div className="golf-shot">
                        <label className="form-label" htmlFor="bogey">
                            Bogey 
                        </label>
                        <input className="input"
                            name="bogey" 
                            id="golfscore"
                            type="number"
                            min="0" 
                            max={(user.totalshots === user.format) ? user.bogey : 18 }
                            placeholder="0"
                            value={user.bogey}
                            onChange={ (e) => changeHandler(e) }>
                        </input>
                    </div>
                    
                    <div className="golf-shot">
                        <label className="form-label" htmlFor="bogeyex">
                            Bogey + 
                        </label>
                        <input className="input"
                            name="bogeyex" 
                            id="golfscore"
                            type="number"
                            min="0" 
                            max={(user.totalshots === user.format) ? user.bogeyex : 18 }
                            placeholder="0"
                            value={user.bogeyex}
                            onChange={ (e) => changeHandler(e)}>
                        </input>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ShotInfo
