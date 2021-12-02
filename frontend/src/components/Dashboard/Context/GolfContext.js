import React, {createContext, useEffect, useState} from 'react'
import { getLogs } from '../../../api';

const GolfContext = createContext();
const GolfProvider = props => {

    const [history, setHistory] = useState([]);
    const [score, setScore] = useState();
    const [par, setPar] = useState();
    const [birdie, setBirdie] = useState();
    const [bogey, setBogey] = useState();


    const dataHandler = async () => {
        const data = await getLogs();
        setHistory( data );
        console.log(data)
        resultHandler(data);
    }

    const resultHandler = (data) => {
        let scores = Math.round((data.reduce((total, current) => total = total + current.total, 0)) / data.length)
        let pars = data.reduce((total,current) => total = total + current.par, 0)
        let birdies = data.reduce((total,current) => total = total + current.birdie, 0)
        let bogeys = data.reduce((total,current) => total = total + (current.bogey + current.bogeyex), 0)
        setScore(scores);
        setPar(pars);
        setBirdie(birdies);
        setBogey(bogeys);
    }

    useEffect( () => {
        dataHandler()
    }, [])

    return(
        <GolfContext.Provider value={{
            history,
            score,
            par,
            birdie,
            bogey
        }}>
        {props.children}
        </GolfContext.Provider>
    )

}

export {GolfContext, GolfProvider}
