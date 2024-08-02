import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function User() {
    const [user, setUser] = useState('');
    const params = useParams();
    console.log(params.uuid);

    useEffect(() => {
        getUserById();
    }, [])


    const getUserById = () => {
        axios.get(`https://randomuser.me/api/?login=${params.uuid}`).then((res) => {
            console.log(res);
            const users = res.data.results;
            console.log(users)
            setUser(users);
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            {user && user.map((user) =>
                <div className='profile-card' key={user.email}>
                    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="profile-image" />
                    <h2 className="profile-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                    <p className="profile-email">{user.email}</p>
                    <p className="profile-location">{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
                    <p className="profile-phone">{`Phone: ${user.phone}`}</p>
                    <p className="profile-cell">{`Cell: ${user.cell}`}</p>
                </div>
            )}

        </>
    )
}
