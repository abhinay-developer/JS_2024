import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefualt();
        const form = { email, password };
        console.log(form);
    }
    return (
        <>
            <div class="container mt-5 bg-white p-5">
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
