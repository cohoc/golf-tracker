import React, {createContext, useState, useEffect} from 'react'
import { createLog } from '../../api/index.js';

const FormContext = createContext();
const FormProvider = props => {

    const [week, setWeek] = useState([]);
    const [user, setUser] = useState({
        course: "",
        city: "", 
        state: "",
        dateplayed: "",  
        teebox: "White",
        front: "",
        back: "", 
        total: "",
        par: 0,
        birdie: 0,
        bogey: 0,
        bogeyex: 0,
        totalshots: 0,
        format: 0
    })

    

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const clear = () => {
        setUser({
            course: "",
            city: "", 
            state: "",
            dateplayed: "",  
            teebox: "White",
            front: "",
            back: "", 
            total: "",
            par: 0,
            birdie: 0,
            bogey: 0,
            bogeyex: 0,
            totalshots: 0,
            format: 0
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const log = {
            course: user.course,
            city: user.city,
            date: user.dateplayed,
            teebox: user.teebox,
            frontnine: Number(user.front),
            backnine: Number(user.back),
            total: Number(user.total), 
            par: Number(user.par),
            birdie: Number(user.birdie),
            bogey: Number(user.bogey),
            bogeyex: Number(user.bogeyex),
            totalshots: Number(user.totalshots),
            format: Number(user.format)
        }
        createLog(log);
        clear();
        window.location.reload();
    }

    const totalHandler = e => {
        setUser({ ...user, total: e.target.value })

        if( Number(user.front) > 25 && Number(user.back) > 25){
            setUser({ ...user, total: (Number(user.front) + Number(user.back)) });
        }
        else {
            setUser({ ...user, total: 0 });
        }
    }

    const weekHandler = () => {
        let today = new Date();
        today.setDate(today.getDate());
        setUser(user => ({ ...user, dateplayed: today.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}) })) 
        
        for (let i=0; i<6; i++){
            let day = new Date(); 
            day.setDate(day.getDate() - i);
            setWeek(week => [...week, day.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})]);
        }

    }

    useEffect( () => {
        weekHandler();
    }, [])

    useEffect(() => {
        setUser(user => ({...user, totalshots: Number(user.par) + Number(user.birdie) + Number(user.bogey) + Number(user.bogeyex)}) )
    }, [user.par, user.birdie, user.bogey, user.bogeyex])

    useEffect( () => {

        if (Number(user.front) < 25 && Number(user.back) < 25 ){
            setUser(user => ({...user, format: 0}))
        }

        else if (((Number(user.front) > 25 || Number(user.back) > 25) && (Number(user.total) === Number(user.front) || Number(user.total) === Number(user.back)))){
            setUser(user => ({...user, format: 9}))
        }

        else {
            setUser(user => ({...user, format: 18}))
        }
        
    }, [user.front, user.back, user.total])
    

    useEffect( () => {
        
        if( Number(user.front) > 25 && Number(user.back) > 25){
            setUser(user => ({...user, total: (Number(user.front) + Number(user.back))}))
        }

        else if(Number(user.front) > 25 && Number(user.back) < 25){
            setUser(user => ({...user, total: (Number(user.front) + Number(user.back))}))
        }

        else if(Number(user.front) < 25 && Number(user.back) > 25){
            setUser(user => ({...user, total: (Number(user.front) + Number(user.back))}))
        }

        else {
            setUser(user => ({...user, total: 0}));
        }

    }, [user.front, user.back])

    return(
        <FormContext.Provider value={{
            week,
            user,
            changeHandler,
            submitHandler,
            totalHandler
            }}>
            {props.children}   
        </FormContext.Provider>
    )
}

export {FormProvider, FormContext}
