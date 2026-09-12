import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/authState';
import axios from 'axios';
import './authModal.css';

const AuthModal = ({ isOpen, onClose, defaultMode = 'login', selectedTier = 'Human' }) => {
  const [isLogin, setIsLogin] = useState(defaultMode === 'login');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const url = isLogin
      ? 'http://localhost:3001/login'
      : 'http://localhost:3001/signup';

    try {
      const response = await axios.post(url, formData);
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

        <h2 className="auth-modal-title">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <p className="auth-modal-subtitle">
          Accessing Learn_X Plan: <span className="tier-badge">{selectedTier}</span>
        </p>

        <form onSubmit={handleSubmit} className="auth-modal-form">
          {!isLogin && (
            <>
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
            </>
          )}

          <div className="auth-input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        {message && (
          <p className={`auth-modal-message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <div className="auth-modal-toggle">
          <button onClick={() => { setIsLogin(!isLogin); setMessage(''); }}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
