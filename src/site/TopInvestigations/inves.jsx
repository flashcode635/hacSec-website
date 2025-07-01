import React, { useState } from 'react';
import './investigation.css';



const TopListInvest = () => {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // investigation categories
  const categories = ['All', 'Social Engineering', 'Threat Awareness', 'API Security', 'Network Security', 'Cyber Criminology'];
  
  // Sample investigation posts data
  const investigationPosts = [ {
    id: 1,
    title: 'Intrusion Insight',
    excerpt: 'Most people think hackers only target big corporations, banks, or government agencies. But the truth? You are a prime target. Why? Because most people don’t take cybersecurity seriously until it’s too late.',
    date: 'June 15, 2023',
    author: 'Security Team',
    category: 'Social Engineering',
    readTime: '8 min read',
    image: 'https://www.group-ib.com/wp-content/uploads/operation-delilah.png.webp',
    link: 'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
  }
    ,
    {
      id: 2,
      title: 'PhishNet Pursuit',
      excerpt: 'Most think cyber threats target only big entities, but YOU are a target too. Cybercriminals seek access and data, exploiting opportunities you unknowingly provide, regardless of your wealth.',
      date: 'May 28, 2023',
      author: 'Alex Johnson',
      category: 'Threat Awareness',
      readTime: '6 min read',
      image: 'https://www.group-ib.com/wp-content/uploads/operation-distanthill-min.png.webp' ,
      link:'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Malware Matrix',
      excerpt: 'APIs (Application Programming Interfaces) are the backbone of modern applications, enabling seamless communication between different systems. However, their increasing adoption has also made them a prime target for cybercriminals. ',
      date: 'May 14, 2023',
      author: 'Sarah Williams',
      category: 'API Security',
      readTime: '5 min read',
      image: 'https://www.group-ib.com/wp-content/uploads/1426e020-00db-47c3-8e9f-bffb91a3a7d2-min.png.webp',
      link:'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Packet Phantom',
      excerpt: 'Stress testing routers by flooding them with millions of requests evaluates network stability and resilience under heavy traffic. This method reveals performance limits but involves risks, requiring careful planning and countermeasures to ensure reliability without causing damage.',
      date: 'April 30, 2023',
      author: 'Michael Chen',
      category: 'Network Security',
      readTime: '7 min read',
      image: 'https://www.group-ib.com/wp-content/uploads/operation-distanthill-min.png.webp',
      link:'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Cipher Sleuth',
      excerpt: 'AI-powered phishing attacks are becoming more sophisticated. This article examines how attackers are leveraging AI and how defenders can stay ahead.',
      date: 'April 15, 2023',
      author: 'Emily Rodriguez',
      category: 'Cyber Criminology',
      readTime: '5 min read',
      image: 'https://www.group-ib.com/wp-content/uploads/operation-delilah.png.webp',
      link:'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
    },
    {
      id: 6,
      title: 'ShadowTrace',
      excerpt: 'APIs (Application Programming Interfaces) are the backbone of modern applications, enabling seamless communication between different systems. However, their increasing adoption has also made them a prime target for cybercriminals. ',
      date: 'May 14, 2023',
      author: 'Sarah Williams',
      category: 'Network Security',
      readTime: '5 min read',
      image: 'https://www.group-ib.com/wp-content/uploads/1426e020-00db-47c3-8e9f-bffb91a3a7d2-min.png.webp',
      link:'https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view?usp=sharing'
    },
  ];
  
  // Filter investigation posts based on search query and active category
  const filteredPosts = investigationPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="investigation-page">
      {/* Hero section with Title and Description */}
      <div className="investigation-hero">
        <div className="investigation-hero-content">
          <h1 style={{fontSize:'4rem'}}>HackSecure investigation</h1>
          <span className="investigation-subtitle">
            Insights, research, and expertise from our cybersecurity professionals
          </span>
        </div>
        <div className="investigation-hero-background"></div>
      </div>
      
      {/* Search and Filter section */}
      <div className="investigation-controls">
        <div className="investigation-search">
          <input 
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <button className="search-button">
            <span className="search-icon">🔍</span>
          </button> */}
        </div>


        {/* search categories by clicking on the button*/}
        <div className="investigation-categories">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Post */}
      {/* <div className="featured-post">
        <div className="featured-post-image">
          <img src={featuredPost.image} alt="Featured post" />
          <div className="featured-post-category">{featuredPost.category}</div>
        </div>
        <div className="featured-post-content">
          <h2>{featuredPost.title}</h2>
          <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
          <div className="post-meta">
            <span className="post-date">{featuredPost.date}</span>
            <span className="post-divider">•</span>
            <span className="post-author">{featuredPost.author}</span>
            <span className="post-divider">•</span>
            <span className="post-read-time">{featuredPost.readTime}</span>
          </div>
          <button className="read-more-button" onClick={() => window.open(featuredPost.link, '_blank')}>Read Article</button>
        </div>
      </div> */}
      
      {/* investigation Posts Grid */}
      <div className="investigation-posts-section">
        <h2 className="section-title">Latest Articles</h2>
        
        {filteredPosts.length > 0 ? (
          <div className="investigation-posts-grid">
            {filteredPosts.map(post => (
              <div className="investigation-post-card" key={post.id}>
                <div className="investigation-post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="investigation-post-category">{post.category}</div>
                </div>
                <div className="investigation-post-content">
                  <h3>{post.title}</h3>
                  <p className="investigation-post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-divider">•</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                <button className="read-more-button" onClick={() => window.open(post.link, '_blank')}>Read Article</button>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No articles found matching your search criteria.</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Newsletter Subscription */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Informed</h2>
          <p>Subscribe to our newsletter to receive the latest cybersecurity insights, research papers, and event information.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopListInvest;