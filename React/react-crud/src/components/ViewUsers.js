import React, { useEffect, useState } from 'react'
import { USER_BASE_URL } from '../routes/AppRoutes';

export default function ViewUsers() {
    const [users, setUsers] = useState([]);



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
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}
