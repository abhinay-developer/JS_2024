import React, { useState } from 'react'
import { USER_BASE_URL } from '../routes/AppRoutes';


export default function CreateAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState(null);
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { firstName, lastName, email, password, mobileNumber };
        createAccount(form);
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setMobileNumber('');
    }

    const createAccount = async (form) => {
        try {
            const data = await fetch(USER_BASE_URL,
                {
                    method: 'POST',
                    body: JSON.stringify(form)
                }
            )
            const res = await data.json();
            setStatus("ACCOUNT CREATED SUCCESSFULLY");
            clearForm();
            console.log(res);

        } catch (err) {
            setStatus("ACCOUNT CREATED FAILED");
            throw new Error(err);
        }
    }

    return (
        <>
            <div class="container mt-5 bg-white p-5">
                <h2 class="mb-4">Create Account</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {
                        status && <p className='alert alert-success'>{status}</p>
                    }
                    <div class="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Enter first name"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div class="form-group mt-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Enter last name"
                            value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div class="form-group mt-2">
                        <label htmlFor="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email"
                            value={email} onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div class="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="form-group mt-2">
                        <label for="mobileNumber">Mobile Number</label>
                        <input type="tel" class="form-control" id="mobileNumber" placeholder="Enter mobile number"
                            value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Register</button>
                </form>
            </div>

        </>
    )
}
