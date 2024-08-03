import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignin = async () => {
        if (!email || !password) {
            setError('Please fill in all fields.');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8085/auth/signin', {
                email,
                password
            });

            if (response.status === 200) {
                // Store the JWT token
                localStorage.setItem('authToken', response.data.jwt);

                setSuccess('Login successful');
                setError('');

                // Redirect to home page or dashboard
                navigate('/home'); // Redirect to home
            } else {
                setError('Login failed. Please try again.');
                setSuccess('');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            setError('Error logging in: ' + errorMessage);
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Signin</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignin}>Signin</button>
        </div>
    );
};

export default Signin;
