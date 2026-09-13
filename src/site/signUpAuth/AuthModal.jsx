import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/authState';
import api from '../../config/api';
import './authModal.css';

const AuthModal = ({ isOpen, onClose, defaultMode = 'login', selectedTier = 'Human' }) => {
  const [isLogin, setIsLogin] = useState(defaultMode === 'login');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const setAuth = useSetRecoilState(userState);

  if (!isOpen) return null;

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
    setLoading(true);

    const url = isLogin ? '/login' : '/signup';

    try {
      const response = await api.post(url, formData);
      const data = response.data;

      if (data.token && data.user) {
        localStorage.setItem('token', data.token);
        setAuth({
          isAuthenticated: true,
          user: data.user,
          token: data.token
        });
        setMessage('Authentication successful!');
        setTimeout(() => {
          onClose();
        }, 500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>&times;</button>

        {!isLogin && (
          <div className="auth-modal-progress" aria-label={`Signup progress: step ${step} of 2`}>
            <div className={`auth-modal-step ${step === 1 ? 'active' : 'complete'}`}><b>1</b><span>Basic Information</span></div>
            <div className="auth-modal-progress-line"><span className={step === 2 ? 'filled' : ''} /></div>
            <div className={`auth-modal-step ${step === 2 ? 'active' : ''}`}><b>2</b><span>Account Setup</span></div>
          </div>
        )}

        <h2 className="auth-modal-title">{isLogin ? 'Sign In' : step === 1 ? "Let's get started" : 'Finish setting up'}</h2>
        <p className="auth-modal-subtitle">
          {isLogin ? 'Sign in to continue learning.' : <>Accessing Learn_X Plan: <span className="tier-badge">{selectedTier}</span></>}
        </p>

        <form onSubmit={isLogin || step === 2 ? handleSubmit : goToNextStep} className="auth-modal-form">
          {!isLogin && step === 1 && (
            <div className="auth-modal-grid">
              <div className="auth-input-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter first name"
                />
              </div>
              <div className="auth-input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter last name"
                />
              </div>
              <div className="auth-input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                />
              </div>
            </div>
          )}

          {(isLogin || step === 2) && (
            <>
              <div className="auth-input-group">
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="Choose a username" />
              </div>
              <div className="auth-input-group">
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Create a password" />
              </div>
            </>
          )}

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : step === 1 ? 'Continue  →' : 'Create Account  →')}
          </button>
        </form>

        {message && (
          <p className={`auth-modal-message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        {!isLogin && step === 2 && <button type="button" onClick={() => setStep(1)} className="auth-modal-back">Back to basic information</button>}

        <div className="auth-modal-toggle">
          <button onClick={() => { setIsLogin(!isLogin); setStep(1); setMessage(''); }}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
