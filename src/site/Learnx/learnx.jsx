import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selector, useRecoilValueLoadable } from 'recoil';
import './resource.css';
import SubscriptionPage from '../Subscription/sub';
import GradientButton from '../Components/buttonWithGradient/resource-btn';
import Loader from '../Components/screeLoading';
import NewSection from './newsection';

const resources = [
    {
        title: "Blogs",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/managed-xdr.png",
        link: "/blogs"
    },
    {
        title: " Micro Modules",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/incident-response-retainer.png",
        link: "/courses"
    },
    {
        title: " Internships",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/attack-surface-management.png",
        link: "/Internship"
    },
    {
        title: "Top Investigations",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/managed-xdr.png",
        link: "/top-investigations"
    },
    {
        title: "Quiz",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/attack-surface-management.png",
        link: "/quiz"
    },
    {
        title: "Tools",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/threat-intelligence.png",
        link: "/tools"
    },
    {
        title: "Reports",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/incident-response-retainer.png",
        link: "/reports"
    },
    {
        title: "Audio Books",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/threat-intelligence.png",
        link: "/audio-books"
    },
    {
        title: "Events",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/managed-xdr.png",
        link: "/events"
    },
    {
        title: "Cyber Laws and Policies",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/attack-surface-management.png",
        link: "/cyber-laws"
    },
    {
        title: "Training Program",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/incident-response-retainer.png",
        link: "/trainings"
    },
    {
        title: "Community Projects",
        imageUrl: "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/subscriptions/threat-intelligence.png",
        link: "/community-projects"
    }
];

function ResourceCard({ title, imageUrl, link }) {
    const navigate = useNavigate();
    const pointToEndpoint = () => {
        navigate(link);
    }

    return (
        <div className="resource-card" >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="resource-icon">
                    <img src={imageUrl} alt={title} />
                </div>
                <div style={{ marginLeft: '22px', width: '80%', height: '100%' }}>
                    <button className="resource-link" style={{ background: 'transparent', border: 'none', height: '100%' }} onClick={pointToEndpoint}>
                        <h3 className='matrix-card-title'>{title}</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

const imageLoaderSelector = selector({
    key: 'imageLoader',
    get: async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 4800));

            return 'https://www.group-ib.com/wp-content/uploads/mssp-md.jpg';
        } catch (error) {
            console.error('Error loading image:', error);
            throw error;
        }
    },
});

const LoadableLearnX = () => {
    const imageLoadable = useRecoilValueLoadable(imageLoaderSelector);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const img = new Image();
        if (imageLoadable.state === 'hasValue') {

            img.src = imageLoadable.contents;
            img.onload = () => setImgLoaded(true);
            img.onerror = () => setImgError(true);
        }
    }, [imageLoadable]);

    if (imageLoadable.state === 'loading' || (imageLoadable.state === 'hasValue' && !imgLoaded && !imgError)) {
        return (
            <Loader/>
        );
    }

    if (imageLoadable.state === 'hasError' || imgError) {
        return <div style={{ color: 'red' }}>Failed to load image.</div>;
    }

    return <ResourcePage imageUrl={imageLoadable.contents} />;
};

export const ResourcePage = ({ imageUrl }) => {
    const [isPrimaryHovered, setPrimaryHovered] = useState(false);

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    };

    const ctaButtonsContainerStyle = {
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap'
    };

    const primaryBtnBaseStyle = {
        maxWidth: '300px',
        padding: '12px 30px',
        fontSize: '1rem',
        backgroundColor: 'white',
        color: 'blue',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    };

    const primaryBtnHoverStyle = {
        backgroundColor: 'rgba(201, 211, 250, 0.9)',
        transform: 'translateY(-5px)'
    };

    const secondaryBtnStyle = {
        minWidth: '200px',
        maxWidth: '200px',
        padding: '12px 30px',
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px solid white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'all 0.3s ease'
    };

    const primaryBtnStyle = isPrimaryHovered
        ? { ...primaryBtnBaseStyle, ...primaryBtnHoverStyle }
        : primaryBtnBaseStyle;

    return (
        <>
            <div className="resource-page">
                <section className="resource-hero" style={{ background: `linear-gradient(to right,  #02020200, #0202022b), url(${imageUrl})`, backgroundSize: "contain", backgroundPosition: "center", width:'100vw' }}>
                    <div className="resource-hero-content" style={{textAlign:'center'}}>
                        <h1 style={{}}> Welcome to Learn X </h1>
                        <p style={{fontFamily:'system-ui', textAlign:'center'}}>The next generation cybersecurity e-learning platform. Built for learners, by Hack Secure</p>
                        {/* <GradientButton name="Let's start" pathname="#resource" /> */}
                    </div>
                </section>

                
            {/* what we provide? section - blogs,trainings,article etc.  */}
                <section style={{ paddingTop: '20px' }} id="resource">
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', width: '70%', height: '5px' }}>
                            <h1 style={{ fontSize: '3.4rem' }}>Platform Feature Matrix</h1>
                        </div>
                    </div>
                    <p style={{ width: '80%', margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3%' }}>
                        Choose your path:
                    </p>
                    <div className="learnx-container">
                        <div className="resource-grid">
                            {resources.map((resource, index) => (
                                <ResourceCard
                                    key={index}
                                    title={resource.title}
                                    imageUrl={resource.imageUrl}
                                    link={resource.link}
                                />
                            ))}
                        </div>
                    </div>
                </section>

        <section style={{width:'100vw', height:'fit-content', marginTop:'7%'}}> 
                    <NewSection/>
                </section>

                <div style={{ marginTop: '7%' }}>
                    <SubscriptionPage />
                </div>

                <section className="resource-cta" 
                // style={{ marginTop: '7%' }}
                >
                    <div className="learnx-container" style={containerStyle}>
                        <h2>Contribute to LearnX?</h2>
                        <p>LearnX to showcase your content, tools, or training programs to a global audience.</p>
                        <div className="cta-buttons" style={ctaButtonsContainerStyle}>
                            <button 
                                style={ {...primaryBtnStyle,width:''}}
                                onMouseEnter={() => setPrimaryHovered(true)}
                                onMouseLeave={() => setPrimaryHovered(false)}
                            >
                                Submit Your Proposal
                            </button>
                            <button
                                style={secondaryBtnStyle}
                            >
                               Contact Our Team
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoadableLearnX; 