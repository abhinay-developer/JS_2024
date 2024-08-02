import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const USER_URL = "https://randomuser.me/api/?results=10";
export default function Users() {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterdUsers, setFilterdUsers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getUsers();
        console.log("UseFfect api call")
    }, []) //Render Only Once useEffect when dependency array is emty

    useEffect(() => {
        const filterdUsers = users.filter((user) => user?.name?.first?.toLowerCase().includes(searchText.toLocaleLowerCase()))
        setFilterdUsers(filterdUsers);
        console.log("UseFeect filterd logic")
    }, [searchText, users])

    const getUsers = () => {
        axios.get(USER_URL).then((res) => {
            console.log(res);
            const users = res.data.results;
            setUsers(users);
        }).catch((err) => {
            console.log(err)
        })
    }
    const searchName = (e) => {
        setSearchText(e.target.value); //sai ==searchText==sai
    }

    return (
        <>
            <div className='form-control'>
                <input type='text' placeholder='firstName' onKeyUp={(e) => searchName(e)} />
            </div>
            {filterdUsers && filterdUsers.map((user) =>
                <div className='card' key={user.email} onClick={() => navigate(`../user/${user.login.uuid}`)}>
                    <div>
                        <img src={user.picture.medium} alt={user.name} />
                    </div>
                    <div>
                        <h1>{user.name.first} , {user.name.last}</h1>
                        <p> {user.email}</p>
                    </div>
                </div>
            )}
        </>
    )
}
