import React, { useState } from 'react';
import './ServiceContactForm.css';

const ServiceContactForm = ({ sessionTopics = [] }) => {
    const [serviceType, setServiceType] = useState('Workshops');
    const [formData, setFormData] = useState({
        fullName: '', email: '', contactNumber: '', organization: '', preferredDate: '', workshopType: '', mode: '', additionalNotes: ''
    });

    const handleServiceChange = (e) => {
        const newServiceType = e.target.value;
        setServiceType(newServiceType);
        let defaultData = {};
        switch(newServiceType) {
            case 'Workshops':
                defaultData = { fullName: '', email: '', contactNumber: '', organization: '', preferredDate: '', workshopType: '', mode: '', additionalNotes: '' };
                break;
            case 'Webinars':
                defaultData = { fullName: '', email: '', contactNumber: '', institution: '', targetAudience: '', topicOfInterest: '', expectedDate: '', additionalNotes: '' };
                break;
            case 'Cyber Investigations':
                defaultData = { fullName: '', email: '', contactNumber: '', clientType: '', caseType: '', issueDescription: '', preferredContactTime: '', ndaRequired: false };
                break;
            case 'Sessions':
                defaultData = { fullName: '', email: '', contactNumber: '', institution: '', sessionTopic: '', audienceSize: '', preferredDateTime: '', mode: '', additionalNotes: '' };
                break;
            default:
                break;
        }
        setFormData(defaultData);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', { serviceType, ...formData });
        alert('Form submitted successfully!');
        handleServiceChange({ target: { value: serviceType } });
    };

    const renderFormFields = () => {
        switch (serviceType) {
            case 'Workshops':
                return (
                    <div className="form-fields">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleInputChange} required />
                        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber || ''} onChange={handleInputChange} required />
                        <input type="text" name="organization" placeholder="Organization / Institution Name" value={formData.organization || ''} onChange={handleInputChange} required />
                        <input type="text" name="preferredDate" placeholder="Preferred Date & Duration" value={formData.preferredDate || ''} onChange={handleInputChange} required />
                        <select name="workshopType" value={formData.workshopType || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Select Workshop Type</option>
                            <option value="Red Teaming">Red Teaming</option>
                            <option value="Blue Teaming">Blue Teaming</option>
                            <option value="OSINT">OSINT</option>
                            <option value="Others">Others</option>
                        </select>
                        <select name="mode" value={formData.mode || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Select Mode</option>
                            <option value="On-Campus">On-Campus</option>
                            <option value="Virtual">Virtual</option>
                        </select>
                        <textarea name="additionalNotes" placeholder="Additional Notes" value={formData.additionalNotes || ''} onChange={handleInputChange}></textarea>
                    </div>
                );
            case 'Webinars':
                return (
                    <div className="form-fields">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleInputChange} required />
                        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber || ''} onChange={handleInputChange} required />
                        <input type="text" name="institution" placeholder="Institution / Community Name" value={formData.institution || ''} onChange={handleInputChange} required />
                        <select name="targetAudience" value={formData.targetAudience || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Select Target Audience</option>
                            <option value="Students">Students</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Professionals">Professionals</option>
                        </select>
                        <select name="topicOfInterest" value={formData.topicOfInterest || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Select Topic of Interest</option>
                            <option value="Awareness">Awareness</option>
                            <option value="Careers">Careers</option>
                            <option value="Trends">Trends</option>
                            <option value="Others">Others</option>
                        </select>
                        <input type="text" name="expectedDate" placeholder="Expected Date" value={formData.expectedDate || ''} onChange={handleInputChange} required />
                        <textarea name="additionalNotes" placeholder="Additional Notes" value={formData.additionalNotes || ''} onChange={handleInputChange}></textarea>
                    </div>
                );
            case 'Cyber Investigations':
                return (
                    <div className="form-fields">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleInputChange} required />
                        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber || ''} onChange={handleInputChange} required />
                        <input type="text" name="clientType" placeholder="Organization / Client Type" value={formData.clientType || ''} onChange={handleInputChange} required />
                        <select name="caseType" value={formData.caseType || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Select Case Type</option>
                            <option value="Fraud">Fraud</option>
                            <option value="Identity Theft">Identity Theft</option>
                            <option value="Data Breach">Data Breach</option>
                            <option value="Others">Others</option>
                        </select>
                        <textarea name="issueDescription" placeholder="Brief Description of the Issue" value={formData.issueDescription || ''} onChange={handleInputChange} required></textarea>
                        <input type="text" name="preferredContactTime" placeholder="Preferred Contact Time" value={formData.preferredContactTime || ''} onChange={handleInputChange} required />
                        <div className="checkbox-container">
                            <input type="checkbox" id="nda" name="ndaRequired" checked={formData.ndaRequired || false} onChange={handleInputChange} />
                            <label htmlFor="nda">NDA Required</label>
                        </div>
                    </div>
                );
            case 'Sessions':
                return (
                    <div className="form-fields">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleInputChange} required />
                        <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber || ''} onChange={handleInputChange} required />
                        <input type="text" name="institution" placeholder="Institution or Group Name" value={formData.institution || ''} onChange={handleInputChange} required />
                        <select name="sessionTopic" value={formData.sessionTopic || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Choose Topic</option>
                            {sessionTopics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                        </select>
                        <input type="number" name="audienceSize" placeholder="Audience Size" value={formData.audienceSize || ''} onChange={handleInputChange} required />
                        <input type="text" name="preferredDateTime" placeholder="Preferred Date and Time" value={formData.preferredDateTime || ''} onChange={handleInputChange} required />
                        <select name="mode" value={formData.mode || ''} onChange={handleInputChange} required>
                            <option value="" disabled>Choose Mode</option>
                            <option value="On-Campus">On-Campus</option>
                            <option value="Online">Online</option>
                        </select>
                        <textarea name="additionalNotes" placeholder="Additional Notes" value={formData.additionalNotes || ''} onChange={handleInputChange}></textarea>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="service-contact-form-section">
            <div className="container">
                <h2>Request a Service</h2>
                <p>Select a service and fill out the form to get in touch with our team.</p>
                <form className="service-contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="serviceType">Select Service Type</label>
                        <select id="serviceType" value={serviceType} onChange={handleServiceChange}>
                            <option value="Workshops">Workshops</option>
                            <option value="Webinars">Webinars</option>
                            <option value="Cyber Investigations">Cyber Investigations</option>
                            <option value="Sessions">Sessions</option>
                        </select>
                    </div>
                    
                    {renderFormFields()}
                    
                    <button type="submit" className="cta-primary">Submit Request</button>
                </form>
            </div>
        </section>
    );
};

export default ServiceContactForm;
