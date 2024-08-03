import React, { useContext } from 'react'
import { userContext } from './contexts/UserContext';

export default function D({ firstName }) {
    const data = useContext(userContext);  //data ={id:1,name:"Rajkumar"}
    return (
        <>
            <div>
                D Component== {firstName}
            </div>
            <div>
                {data.id}  {data.name}
            </div>
        </>
    )
}
