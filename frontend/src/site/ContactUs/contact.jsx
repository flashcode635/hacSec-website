import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    message: '',
    acceptTerms: false
  });

  // State for form validation
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Company validation
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    
    // Required terms acceptance
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Form is valid, simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        message: '',
        acceptTerms: false
      });
      setSubmitted(false);
    }, 5000);
  };

  // List of countries for dropdown
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
    'France', 'India', 'Japan', 'China', 'Brazil', 'Other'
  ];

  return (
    <div className="contact-page">
      {/* Hero section with background effect */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <p style={{color:'white',fontSize:'45px',fontWeight:'bold'}}>Talk to Our Experts</p>
          <p className="contact-subtitle">
            Get in touch with our specialists to learn how we can help secure your business
          </p>
        </div>
        <div className="hero-background"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>How can we help?</h2>
          <p>
            Our team of security experts is ready to discuss your cybersecurity challenges and provide tailored solutions for your organization.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="email-icon"></i>
              </div>
              <div className="contact-details">
                <h3>Email us</h3>
                <p>contact@hacksec.com</p>
                <p>For general inquiries</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="call-icon"></i>
              </div>
              <div className="contact-details">
                <h3>Call us</h3>
                <p>+1 (800) 123-4567</p>
                <p>Monday to Friday, 9am-5pm</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="location-icon"></i>
              </div>
              <div className="contact-details">
                <h3>Visit us</h3>
                <p>123 Cyber Street</p>
                <p>Security Tower, Floor 21</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h2>Thank you for contacting us!</h2>
              <p>We've received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Contact Form</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Business Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="+1 (123) 456-7890"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? 'error' : ''}
                  />
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your cybersecurity challenges or questions..."
                ></textarea>
              </div>
              
              <div className="form-group full-width checkbox-group">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className={errors.acceptTerms ? 'error' : ''}
                />
                <label htmlFor="acceptTerms" className="checkbox-label">
                  I agree to the processing of personal data according to the <a href="#privacy-policy">Privacy Policy</a>*
                </label>
                {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
              </div>
              
              <button type="submit" className="submit-button">
                Submit Request
              </button>
              
              <p className="required-fields">
                * Required fields
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
