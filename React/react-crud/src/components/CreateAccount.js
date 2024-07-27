import React, { useEffect, useState } from 'react'
import { USER_BASE_URL } from '../routes/AppRoutes';
import { useNavigate, useParams } from 'react-router-dom';


export default function CreateAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState(null);
    const [status, setStatus] = useState('');
    const params = useParams();//URL parameter
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { firstName, lastName, email, password, mobileNumber };

        if ((params.id === '' || params.id === undefined || params.id === null)) {
            createAccount(form);
        } else {
            updateAccount(form);
        }
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setMobileNumber('');
    }


    useEffect(() => {
        if (params.id) {
            getUserById();
        }

    }, [])


    const setFormData = (res) => {
        const { firstName, lastName, email, password, mobileNumber } = res;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setMobileNumber(mobileNumber);
    }


    const getUserById = async () => {
        try {
            const data = await fetch(`${USER_BASE_URL}/${params.id}`)//GET DATA BASED ON ID
            const res = await data.json();
            setFormData(res);
        } catch (err) {
            throw new Error(err);
        }
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

    const updateAccount = async (form) => {
        try {
            const data = await fetch(`${USER_BASE_URL}/${params.id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(form)
                }
            )
            const res = await data.json();
            navigate('../view-users')

            console.log(res);

        } catch (err) {
            setStatus("ACCOUNT UPDATED FAILED");
            throw new Error(err);
        }
    }

    return (
        <>
            <div class="container mt-5 bg-white p-5">
                <h2 class="mb-4">
                    {
                        (params.id === '' || params.id === undefined || params.id === null) ? 'CREATE ACCOUNT' : 'UPDATE ACCOUNT'
                    }
                </h2>
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
                    <button type="submit" class="btn btn-primary mt-2">
                        {
                            (params.id === '' || params.id === undefined || params.id === null) ? 'CREATE ACCOUNT' : 'UPDATE ACCOUNT'
                        }
                    </button>
                </form>
            </div>

        </>
    )
}
