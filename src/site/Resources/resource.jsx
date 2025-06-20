import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selector, useRecoilValueLoadable } from 'recoil';
import './resource.css';
import SubscriptionPage from '../Subscription/sub';
import GradientButton from '../Components/resource-btn';

const resources = [
    {
        title: "Blogs",
        imageUrl: "https://img.icons8.com/ios/50/3498db/security-checked.png",
        link: "/blogs"
    },
    {
        title: " Micro Modules",
        imageUrl: "https://img.icons8.com/ios/50/3498db/book.png",
        link: "/courses"
    },
    {
        title: "Top Investigations",
        imageUrl: "https://img.icons8.com/ios/50/3498db/training.png",
        link: "/top-investigations"
    },
    {
        title: "Quiz",
        imageUrl: "https://img.icons8.com/ios/50/3498db/training.png",
        link: "/quiz"
    },
    {
        title: "Tools",
        imageUrl: "https://img.icons8.com/ios/50/3498db/screwdriver.png",
        link: "/tools"
    },
    {
        title: "Reports",
        imageUrl: "https://img.icons8.com/ios/50/3498db/artificial-intelligence.png",
        link: "/reports"
    },
    {
        title: "Audio Books",
        imageUrl: "https://img.icons8.com/ios/50/3498db/podcast.png",
        link: "/audio-books"
    },
    {
        title: "Events",
        imageUrl: "https://img.icons8.com/ios/50/3498db/play.png",
        link: "/events"
    },
    {
        title: "Cyber Laws and Policies",
        imageUrl: "https://img.icons8.com/ios/50/3498db/shield.png",
        link: "/cyber-laws"
    },
    {
        title: "Trainings Programs",
        imageUrl: "https://img.icons8.com/ios/50/3498db/training.png",
        link: "/trainings"
    },
    {
        title: "Community Projects",
        imageUrl: "https://img.icons8.com/ios/50/3498db/project.png",
        link: "/community-projects"
    }
];

function ResourceCard({ title, imageUrl, link }) {
    const navigate = useNavigate();
    const pointToEndpoint = () => {
        navigate(link);
    }

    return (
        <div className="resource-card">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="resource-icon">
                    <img src={imageUrl} alt={title} />
                </div>
                <div style={{ marginLeft: '22px', width: '50%' }}>
                    <button className="resource-link" style={{ background: 'transparent', border: 'none' }} onClick={pointToEndpoint}>
                        <h3>{title}</h3>
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
            return 'https://www.group-ib.com/wp-content/uploads/talktosales-header-1024-min.jpg';
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (imageLoadable.state === 'hasError' || imgError) {
        return <div style={{ color: 'red' }}>Failed to load image.</div>;
    }

    return <ResourcePage imageUrl={imageLoadable.contents} />;
};

const ResourcePage = ({ imageUrl }) => {
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
        maxWidth: '200px',
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
        backgroundColor: 'rgba(227, 231, 247, 0.9)',
        transform: 'translateY(-5px)'
    };

    const secondaryBtnStyle = {
        minWidth: '200px',
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
                <section className="resource-hero" style={{ background: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0.6)), url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="resource-hero-content">
                        <h1>Learn X </h1>
                        <p>LearnX – The next generation cybersecurity e-learning platform. Built for learners, by Hack Secure</p>
                        <GradientButton name="Let's start" pathname="#resource" />
                    </div>
                </section>

                <section style={{ paddingTop: '70px' }} id="resource">
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', width: '50%', height: '5px' }}>
                            <h1 style={{ fontSize: '4rem' }}>Platform Feature Matrix</h1>
                        </div>
                    </div>
                    <p style={{ width: '80%', margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3%' }}>
                        Choose your path:
                    </p>
                    <div className="container">
                        <div style={{ margin: '0% 10% 0% 10%' }}>
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
                    </div>
                </section>

                <div style={{ marginTop: '7%' }}>
                    <SubscriptionPage />
                </div>

                <section className="resource-cta" style={{ marginTop: '7%' }}>
                    <div className="container" style={containerStyle}>
                        <h2>Like to Learn More?</h2>
                        <p>Contact our team of security experts for a personalized consultation.</p>
                        <div className="cta-buttons" style={ctaButtonsContainerStyle}>
                            <button
                                style={primaryBtnStyle}
                                onMouseEnter={() => setPrimaryHovered(true)}
                                onMouseLeave={() => setPrimaryHovered(false)}
                            >
                                Schedule a Call
                            </button>
                            <button
                                style={secondaryBtnStyle}
                            >
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoadableLearnX; 