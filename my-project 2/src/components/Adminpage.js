import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Adminpage = () => {

    const [infos, setinfos] = useState([]);

    useEffect( async () => {
        await Axios.get('http://localhost:3001/Admin', {
            params : {
                token: localStorage.getItem("token"),
            }
        }).then(async (response) => {
            await setinfos(response.data);
            console.log(response.data);
        }).catch( (err) => {
            console.log(err.response.data);
        })
    }, [])

    
    return (
        <div className="w-screen h-screen bag-admin pt-40">
            <div className="w-screen flex items-center justify-center mt-10">
                <h1 className="text-black text-5xl font-bold font-serif">{infos.agencename}</h1>
            </div>
        </div>
    )
}

export default Adminpage
