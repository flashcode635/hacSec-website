import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './partnersPage.css';

const formConfig = {
  'International Partners': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number (with Country Code)', type: 'tel', required: true },
    { name: 'organizationName', label: 'Organization / Institution Name', type: 'text', required: true },
    { name: 'countryRegion', label: 'Country / Region', type: 'text', required: true },
    { name: 'collaborationType', label: 'Type of Collaboration', type: 'select', required: true, options: ['Joint Webinar / Awareness Campaign', 'Research', 'Knowledge Sharing'] },
    { name: 'preferredMode', label: 'Preferred Mode', type: 'select', required: true, options: ['Virtual', 'In-Person', 'Hybrid'] },
    { name: 'previousInitiative', label: 'Any Previous Initiative or Reference', type: 'textarea' },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'textarea' },
  ],
  'Brand Ambassadors': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
    { name: 'institutionName', label: 'Institution / Organization Name', type: 'text', required: true },
    { name: 'currentRole', label: 'Current Role / Year (e.g., 2nd Year B.Tech Student)', type: 'text', required: true },
    { name: 'regionCity', label: 'Region / City', type: 'text', required: true },
    { name: 'whyAmbassador', label: 'Why Do You Want to Become an Ambassador?', type: 'textarea', required: true },
    { name: 'relevantExperience', label: 'Any Relevant Experience (Event Handling / Promotion / Community Work)', type: 'textarea' },
    { name: 'socialLinks', label: 'Social Links (LinkedIn, Instagram, etc.)', type: 'text' },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'textarea' },
  ],
  'Community Partners': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
    { name: 'communityName', label: 'Name of Community / Group', type: 'text', required: true },
    { name: 'locationCity', label: 'Location / City', type: 'text', required: true },
    { name: 'socialLinksWebsite', label: 'Social Links or Website (if available)', type: 'text' },
    { name: 'collaborationGoals', label: 'Collaboration Goals (Short Description)', type: 'textarea', required: true },
    { name: 'communitySize', label: 'Estimated Community Size', type: 'text' },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'textarea' },
  ],
  'Academic Partners': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
    { name: 'institutionName', label: 'Institution / College Name', type: 'text', required: true },
    { name: 'designationRole', label: 'Designation / Role (if applicable)', type: 'text' },
    { name: 'location', label: 'Location (City/State)', type: 'text', required: true },
    { name: 'collaborationType', label: 'Type of Collaboration', type: 'select', required: true, options: ['Workshops', 'Internships', 'Curriculum Support'] },
    { name: 'preferredMode', label: 'Preferred Mode', type: 'select', required: true, options: ['Online', 'On-Campus'] },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'textarea' },
  ],
  'Event Partners and Sponsors': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
    { name: 'eventName', label: 'Event Name', type: 'text', required: true },
    { name: 'eventType', label: 'Type (Tech Fest / Summit / Webinar Series)', type: 'text', required: true },
    { name: 'hostingOrg', label: 'Organization / Institute Hosting the Event', type: 'text', required: true },
    { name: 'eventDates', label: 'Event Date(s)', type: 'text', required: true },
    { name: 'audienceSize', label: 'Expected Audience Size', type: 'text', required: true },
    { name: 'supportRequired', label: 'Type of Support Required', type: 'select', required: true, options: ['Session / Workshop', 'Sponsorship', 'CTF'] },
    { name: 'pastEventLink', label: 'Any Past Event Link (if available)', type: 'text' },
    { name: 'additionalNotes', label: 'Additional Notes', type: 'textarea' },
  ],
  'Corporate Partners': [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel', required: true },
    { name: 'companyName', label: 'Company Name', type: 'text', required: true },
    { name: 'designationRole', label: 'Designation / Role', type: 'text', required: true },
    { name: 'organizationWebsite', label: 'Organization Website', type: 'text', required: true },
    { name: 'areaOfInterest', label: 'Area of Interest', type: 'select', required: true, options: ['Sponsorship', 'Research', 'Talent Access', 'Joint Events'] },
    { name: 'collaborationTimeline', label: 'Expected Collaboration Timeline', type: 'text' },
    { name: 'additionalNotes', label: 'Additional Notes or Proposal Brief', type: 'textarea' },
  ]
};

const partnerTierOptions = {
  'International Partners': 'Global / International Partner',
  'Brand Ambassadors': 'Brand Ambassador',
  'Community Partners': 'Community Partner',
  'Academic Partners': 'Academic Partner',
  'Event Partners and Sponsors': 'Event Partner or Sponsor',
  'Corporate Partners': 'Corporate Partner'
};

const inputStyles = {
  width: '100%',
  background: '#222',
  color: '#fff',
  border: '1px solid #3498db',
  borderRadius: 5,
  padding: '12px',
  fontSize: '16px'
};

const PartnerForm = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#' symbol
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);


  // const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTier = searchParams.get('tier') || Object.keys(partnerTierOptions)[0];

  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fields = formConfig[selectedTier] || [];
    const initialData = fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {});
    setFormData(initialData);
  }, [selectedTier]);

  const handleTierChange = (e) => {
    setSelectedTier(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { tier: selectedTier, ...formData });
    setSubmitted(true);
  };

  const renderField = (field) => {
    const { name, label, type, required, options, placeholder } = field;
    const commonProps = {
      id: name,
      name: name,
      value: formData[name] || '',
      onChange: handleChange,
      required: !!required,
      placeholder: placeholder || label,
      style: inputStyles
    };

    if (type === 'textarea') {
      return <textarea {...commonProps} style={{ ...inputStyles, minHeight: 100 }} />;
    }

    if (type === 'select') {
      return (
        <select {...commonProps}>
          <option value="">-- Select an option --</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      );
    }

    return <input type={type} {...commonProps} />;
  };

  return (
    <div className='form-page'> 
      <div className="partners-page" id='partners' style={{ minHeight: '100vh', paddingTop:70, paddingBottom: 40, background:'none' }}>
        <div className="" style={{ minHeight: 'auto', padding: '4px 20px', marginBottom: 40 }}>
          <div className="partners-hero-content">
            <h1 className="partners-title" style={{textAlign:'center', width:'90vw'}}>Partner with HackSecure</h1>
           
          </div>
        </div>
        <div  style={{ maxWidth: 700, margin: '0 auto', background: 'rgba(17,17,20,0.95)', borderRadius: 12, backgroundColor: '#0c162700',   backdropFilter: 'blur(10px)', padding: '10px 40px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', color: '#3498db', fontSize: 20, padding: '40px 0' }}>
              <p>Thank you for your application!</p>
              <p>Our team will review your submission and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="partner-form">
              <div style={{ marginBottom: 22 }}>
                <label htmlFor="tier-select" className="section-title" style={{ fontSize: 18, marginBottom: 10, display: 'block', textAlign: 'left' }}>Select Partnership Type</label>
                <select id="tier-select" value={selectedTier} onChange={handleTierChange} style={inputStyles}>
                  {Object.entries(partnerTierOptions).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              {formConfig[selectedTier] && formConfig[selectedTier].map(field => (
                <div key={field.name} style={{ marginBottom: 24 }}>
                  <label htmlFor={field.name} style={{ display: 'block', color: '#e4e9ee', marginBottom: 8, fontWeight: 500 }}>
                    {field.label}{field.required && <span style={{ color: '#3498db' }}> *</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}

              {selectedTier && formConfig[selectedTier] && (
                <button type="submit" className="tier-apply-button" style={{ width: '100%', fontSize: 18, marginTop: 20 }}>
                  Submit Application
                </button>
              )}
            </form>
          )}
        </div>
      </div> 
    </div>
  );
};

export default PartnerForm;