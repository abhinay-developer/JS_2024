import React, { useEffect, useState } from 'react'
import { USER_BASE_URL } from '../routes/AppRoutes';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = { email, password };
        console.log(form);
        const user = users.find((user) => user.email === form.email && user.password === form.password);
        if (user) {
            navigate('../home')
        } else {
            setStatus('LOGIN FAILED')
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []) //dependency Array

    const getAllUsers = async () => {
        try {
            const data = await fetch(USER_BASE_URL)
            const res = await data.json();
            setUsers(res);
            console.log(res);
        } catch (err) {
            throw new Error(err);
        }
    }


    return (
        <>
            <div class="container mt-5 bg-white p-5 w-50">
                {
                    status && <p class='alert alert-danger'>{status}</p>
                }
                <h2 class="mb-4">Login</h2>
                <form onSubmit={(e) => handleLogin(e)}>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group mt-2">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Login</button>
                </form>
            </div>
        </>
    )
}
