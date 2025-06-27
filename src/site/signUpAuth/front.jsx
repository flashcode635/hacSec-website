import React, { useState } from 'react';
import './authPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

        const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const url = isLogin ? 'https://hacksec-prv-ltd-backend123.onrender.com/login' : 
        'https://hacksec-prv-ltd-backend123.onrender.com/signup';

        try {
            const response = await axios.post(url, formData);
            setMessage(response.data.message);
            if (response.status === 200 || response.status === 201) {
                navigate('/Learn_X');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <div className="auth-field">
                            <label>First Name:</label>
                            <input type="text" name="firstName" onChange={handleChange} required />
                        </div>
                        <div className="auth-field">
                            <label>Last Name:</label>
                            <input type="text" name="lastName" onChange={handleChange} required />
                        </div>
                        <div className="auth-field">
                            <label>Email:</label>
                            <input type="email" name="email" onChange={handleChange} required />
                        </div>
                    </>
                )}
                <div className="auth-field">
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleChange} required />
                </div>
                <div className="auth-field">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="auth-btn-primary">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            {message && <p className={`auth-message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</p>}
            <button onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
                {isLogin ? 'Need to create an account?' : 'Already have an account?'}
            </button>
                    </div>
        </div>
    );
};

export default AuthPage;
