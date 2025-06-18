import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { atom, selector, useRecoilStateLoadable ,useRecoilValueLoadable} from 'recoil';
import './resource.css';
import SubscriptionPage from '../Subscription/sub';
import GradientButton from '../Components/resource-btn';
// import defensive from './defensive.jpg';


const resources = [
              {
                title: "Blogs",
                imageUrl: "https://img.icons8.com/ios/50/3498db/security-checked.png",
                link: "/blogs"
              },
              {
                title: "Modules", 
                imageUrl: "https://img.icons8.com/ios/50/3498db/book.png",
                link: "/courses"
              },
              {
                title:"Top Investigations",
                imageUrl: "https://img.icons8.com/ios/50/3498db/training.png",
                link: "/top-investigations"
              },
              {
                title: "Internships",
                imageUrl: "https://img.icons8.com/ios/50/3498db/artificial-intelligence.png", 
                link: "/internship"
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
                title: "Trainings",
                imageUrl: "https://img.icons8.com/ios/50/3498db/training.png",
                link: "/trainings"
              },
              {
                title: "Community Projects",
                imageUrl: "https://img.icons8.com/ios/50/3498db/project.png",
                link: "/community-projects"
              }
            ];
function  ResourceCard({ title,imageUrl, link }) {
  
  return (  
    <div className="resource-card">
      <div style={{display:'flex', alignItems: 'center'}}>
            <div className="resource-icon">
              <img src={imageUrl} alt={title} />
            </div>
            <div style={{marginLeft: '22px', width: '50%'}}>  
             <a href={link} className="resource-link"><h3>{title}</h3></a>
            
            </div>
      </div>
     
      
    </div>
  );
};

// Recoil selector to load the image URL
const imageLoaderSelector = selector({
  key: 'imageLoader',
  get: async ({get}) => {
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

  // Local state to track if image has finished loading
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Once the selector has the URL, start preloading the image
  useEffect(() => {
    if (imageLoadable.state === 'hasValue') {
      const img = new Image();
      img.src = imageLoadable.contents;

      img.onload = () => {
        setImgLoaded(true);
        setImgError(false);
      };
      img.onerror = () => {
        setImgError(true);
        setImgLoaded(false);
      };

      // Cleanup
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [imageLoadable]);

  // Show loading while selector is loading or image is not yet loaded
  if (imageLoadable.state === 'loading' || !imgLoaded) {
    return (
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div class="loader">
          <div>
            <ul>
              <li>
                <svg fill="currentColor" viewBox="0 0 90 120">
                  <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                </svg>
              </li>
              <li>
                <svg fill="currentColor" viewBox="0 0 90 120">
                  <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
      <li>
        <svg fill="currentColor" viewBox="0 0 90 120">
          <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
        </svg>
      </li>
    </ul>
  </div><span>Loading</span></div>
      </div>
    );
  }

  if (imageLoadable.state === 'hasError' || imgError) {
    return <div style={{ color: 'red' }}>Failed to load image.</div>;
  }

  // When loaded, render ResourcePage with image URL prop
  return <ResourcePage imageUrl={imageLoadable.contents} />;
};

const ResourcePage = ({ imageUrl }) => {
    return (
    <>
      <div className="resource-page">
        {/* Hero Section */}
        <section className="resource-hero" style={{background: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0.6)), url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="resource-hero-content">
            <h1>Learn X </h1>
            <p>LearnX – The next generation cybersecurity e-learning
                platform. Built for learners, by Hack Secure
            </p>
            {/* <button className="hero-cta-button">Request a Consultation</button> */}
            <GradientButton name="Let's start" />
          </div>
        </section>

      {/* resource Overview Section */}
      <section className="resource-overview">
                {/* heading for cards */}

          <div style={{ textAlign: 'center' }}> 

                <div style={{display: 'inline-block', width: '50%', height: '5px', backgroundColor: '#3498db'}}> 

                      <h1 style={{fontSize:'4rem'}}>
                      Platform Feature Matrix
                        </h1>
                </div> 
              
            </div>
          
            <p style={{width: '80%', margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3%'}}>
              Choose your path: 
            </p>
        <div className="container">
          <div className="resource-grid">
              {/* Resource Cards */}
            

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

      {/* subscription */}
      <div style={{marginTop: '7%'}}> 
        <SubscriptionPage />
      </div>
      

      {/* CTA Section */}
      <section className="resource-cta" style={{marginTop: '7%'}}>
        <div className="container">
          <h2> Like to Learn More?</h2>
          <p>Contact our team of security experts for a personalized consultation.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule a Call</button>
            <button className="cta-secondary">View Case Studies</button>
          </div>
        </div>
      </section>

  
    </div>
    </>
  );

  
};

export default LoadableLearnX; 