import React, { useEffect, useState } from 'react';
import { USER_BASE_URL } from '../routes/AppRoutes';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateAccount() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [status, setStatus] = useState('');
    const params = useParams(); // URL parameter
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setMobileNumber('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { firstName, lastName, email, password, mobileNumber };

        if (!params.id) {
            if (!validateForm()) {
                return false;
            } else {
                createAccount(form);
            }
        } else {
            updateAccount(form);
        }
    };

    useEffect(() => {
        if (params.id) {
            getUserById();
        }
    }, [params.id]);

    const setFormData = (res) => {
        const { firstName, lastName, email, password, mobileNumber } = res;
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setMobileNumber(mobileNumber);
    };

    const getUserById = async () => {
        try {
            const data = await fetch(`${USER_BASE_URL}/${params.id}`);
            const res = await data.json();
            setFormData(res);
        } catch (err) {
            throw new Error(err);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!firstName) {
            errors.firstName = 'First Name is Required';
        } else if (firstName.length > 5) {
            errors.firstName = 'Max Length should be 5';
        }
        if (!lastName) {
            errors.lastName = 'Last Name is Required';
        }
        if (!email) {
            errors.email = 'Email is Required';
        }
        if (!password) {
            errors.password = 'Password is Required';
        }
        if (!mobileNumber) {
            errors.mobileNumber = 'Mobile Number is Required';
        } else if (mobileNumber.length !== 10) {
            errors.mobileNumber = 'Mobile Number Length should be 10';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const createAccount = async (form) => {
        try {
            const data = await fetch(USER_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const res = await data.json();
            setStatus('ACCOUNT CREATED SUCCESSFULLY');
            clearForm();
            console.log(res);
        } catch (err) {
            setStatus('ACCOUNT CREATION FAILED');
            throw new Error(err);
        }
    };

    const updateAccount = async (form) => {
        try {
            const data = await fetch(`${USER_BASE_URL}/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const res = await data.json();
            navigate('../view-users');
            console.log(res);
        } catch (err) {
            setStatus('ACCOUNT UPDATE FAILED');
            throw new Error(err);
        }
    };

    return (
        <>
            <div className="container mt-5 bg-white p-5 w-50">
                <h2 className="mb-4">
                    {!params.id ? 'CREATE ACCOUNT' : 'UPDATE ACCOUNT'}
                </h2>
                <form onSubmit={handleSubmit}>
                    {status && <p className="alert alert-success">{status}</p>}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mobileNumber"
                            placeholder="Enter mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        {!params.id ? 'CREATE ACCOUNT' : 'UPDATE ACCOUNT'}
                    </button>
                </form>
            </div>
        </>
    );
}
