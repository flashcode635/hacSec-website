import React, { useState } from 'react';
import './authPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [step, setStep] = useState(1);
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

    const goToNextStep = (e) => {
        e.preventDefault();
        setMessage('');
        setStep(2);
    };


        const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const url = isLogin ? 'https://hacksec-prv-ltd-backend123.onrender.com/login' : 
        'https://hacksec-prv-ltd-backend123.onrender.com/signup';
        // const url = isLogin ? 'http://localhost:3001/login' : 
        // 'http://localhost:3001/signup';
        try {
            const response = await axios.post(url, formData);
            setMessage(response.data.message);
            if (response.status === 200 || response.status === 201) {
                navigate('/dashboard');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
                       }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <section className="auth-intro">
                    <span className="auth-eyebrow">Learn Without Limits</span>
                    <h1>Build a <strong>Smarter</strong> You.</h1>
                    <p>Personalized learning paths, real progress, and a community that grows with you.</p>
                    <div className="auth-benefits">
                        <span>Learn at your pace</span>
                        <span>Track your progress</span>
                        <span>Join a growing community</span>
                    </div>
                </section>

                <section className="auth-form-panel">
                    <div className="auth-progress" aria-label={`Signup progress: step ${isLogin ? 2 : step} of 2`}>
                        <div className={`auth-step ${step === 1 && !isLogin ? 'active' : 'complete'}`}><b>1</b><span>Basic Information</span></div>
                        <div className="auth-progress-line"><span className={step === 2 || isLogin ? 'filled' : ''} /></div>
                        <div className={`auth-step ${step === 2 || isLogin ? 'active' : ''}`}><b>2</b><span>Account Setup</span></div>
                    </div>

                    <h2>{isLogin ? 'Welcome back' : step === 1 ? "Let's get started" : 'Finish setting up'}</h2>
                    <p className="auth-form-subtitle">{isLogin ? 'Sign in to continue learning.' : 'Tell us a bit about yourself.'}</p>

                    <form onSubmit={isLogin || step === 2 ? handleSubmit : goToNextStep}>
                        {!isLogin && step === 1 && (
                            <div className="auth-form-grid">
                                <div className="auth-field"><label>First name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter your first name" /></div>
                                <div className="auth-field"><label>Last name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter your last name" /></div>
                                <div className="auth-field full-width"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" /></div>
                            </div>
                        )}
                        {(isLogin || step === 2) && (
                            <>
                                <div className="auth-field"><label>Username</label><input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="Choose a username" /></div>
                                <div className="auth-field"><label>Password</label><input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Create a password" /></div>
                            </>
                        )}
                        <button type="submit" className="auth-btn-primary">{isLogin ? 'Sign In' : step === 1 ? 'Continue  →' : 'Create Account  →'}</button>
                    </form>
                    {message && <p className={`auth-message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</p>}
                    {!isLogin && step === 2 && <button type="button" onClick={() => setStep(1)} className="auth-back">Back to basic information</button>}
                    <button onClick={() => { setIsLogin(!isLogin); setStep(1); setMessage(''); }} className="auth-toggle">
                        {isLogin ? 'Need to create an account? Sign Up' : 'Already have an account? Sign In'}
                    </button>
                </section>
            </div>
        </div>
    );
};

export default AuthPage;
