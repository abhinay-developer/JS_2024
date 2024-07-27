import React, { useEffect, useState } from 'react'
import { USER_BASE_URL } from '../routes/AppRoutes';
import { useNavigate } from 'react-router-dom';

export default function ViewUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []) //dependency Array

    const getAllUsers = async () => {
        try {
            const data = await fetch(USER_BASE_URL)
            const res = await data.json();
            setUsers(res);
        } catch (err) {
            throw new Error(err);
        }
    }

    const handleDelete = async (userId) => {//91f4
        try {                         //http://localhost:4000/users/91f4" //URL /ENDPOINT/API
            const data = await fetch(`${USER_BASE_URL}/${userId}`,
                {
                    method: 'DELETE'
                }
            )
            const res = await data.json();
            console.log(res);
            getAllUsers();
        } catch (err) {
            throw new Error(err);
        }
    }

    const handleUpdate = (userId) => {
        console.log(userId);
        navigate(`../update-account/${userId}`)  //update-account/1d2a
    }
    return (
        <>
            <table class="table w-75 bg-white m-auto p-5 mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNumber}</td>
                            <td>
                                <button type='button' class='btn btn-danger mx-2' onClick={() => handleDelete(user.id)}>Delete</button>
                                <button type='button' class='btn btn-success' onClick={() => handleUpdate(user.id)}>Update</button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}
