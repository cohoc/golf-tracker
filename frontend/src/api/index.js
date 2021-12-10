import axios from 'axios'

const url = 'http://localhost:5000/logs';

export const createLog = async (data) => {
    await axios.post(url, data)
        .then( res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const getLogs = async () => {
    return await axios.get(url).then(res => res.data)
}

export const getLog = async (id) => {
    let logID = id;
    const data = await axios.get(`${url}/${logID}`)
        .then( res => res.data)
        .catch( error => console.log(error.message) )

    return(data);
}

export const deleteLog = async (id) => {
    let logID = id;
    await axios.delete(`${url}/${logID}`)
        .then( res => console.log(res))
        .catch( error => console.log(error.message))
}