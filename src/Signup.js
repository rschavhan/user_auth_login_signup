import React, { useState } from 'react';
import axios from 'axios';

import './style.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async () => {
        if (!formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.mobile) {
            setError('Please fill in all fields.');
            setSuccess('');
            return;
        }

        try {
            await axios.post('http://localhost:8085/auth/signup', {
                ...formData,
                role: 'ROLE_USER'  // Setting default role to 'ROLE_USER'
            });

            setSuccess('Signup successful');
            setError('');

               } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            setError('Error signing up: ' + errorMessage);
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
