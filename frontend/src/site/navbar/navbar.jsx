import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../state/authState';
import api from '../../config/api';
import './navbar.css';
import CompanyMenu from './companyTag';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [auth, setAuth] = useRecoilState(userState);

  // Check JWT token in localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (res.data && res.data.user) {
          setAuth({
            isAuthenticated: true,
            user: res.data.user,
            token
          });
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        setAuth({
          isAuthenticated: false,
          user: null,
          token: null
        });
      });
    }
  }, [setAuth]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null
    });
    setShowDropdown(false);
  };

  const firstLetter = auth.user && auth.user.firstName
    ? auth.user.firstName.charAt(0).toUpperCase()
    : (auth.user && auth.user.username ? auth.user.username.charAt(0).toUpperCase() : 'U');

  return (
    <nav className="navbar backdrop-blur-[13px]!">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Hack Secure
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/Learn_X">LearnX</Link></li>
        <CompanyMenu />
      </ul>

      <div className="right-buttons" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link to="/contact" className="contact-btn" style={{ marginRight: '2%', width: '8vw' }}>Contact Us</Link>

        {auth.isAuthenticated && auth.user ? (
          <div className="profile-container" style={{ position: 'relative' }}>
            <button
              className="profile-sphere"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                border: '2px solid #60a5fa',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
              title={auth.user.firstName || auth.user.username}
            >
              {firstLetter}
            </button>

            {showDropdown && (
              <div
                className="profile-dropdown"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50px',
                  backgroundColor: '#111827',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  padding: '15px',
                  width: '220px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  zIndex: 1000,
                  color: '#f3f4f6',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>
                  {auth.user.firstName} {auth.user.lastName}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '10px' }}>
                  @{auth.user.username}
                </div>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#1e3a8a',
                  color: '#93c5fd',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  Tier: {auth.user.plan || 'Human'}
                </div>
                <hr style={{ borderColor: '#374151', margin: '8px 0' }} />
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '8px',
                    backgroundColor: '#ef4444',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    marginTop: '5px'
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : 
        (
          <>
            <Link to="/signup" className="contact-btn" style={{ marginRight: '0', width:'6vw' }}>Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
