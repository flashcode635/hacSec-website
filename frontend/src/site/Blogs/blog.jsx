import React, { useState } from 'react';
import './blog.css';
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img from './image.jpg';

const BlogPage = () => {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Blog categories
  const categories = ['All', 'Social Engineering', 'Threat Awareness', 'API Security', 'Network Security', 'Cyber Criminology'];
  
  // Featured blog post data
  const featuredPost = {
    id: 1,
    title: 'How Hackers Trick You Without You Even Knowing',
    excerpt: 'Most people think hackers only target big corporations, banks, or government agencies. But the truth? You are a prime target. Why? Because most people don’t take cybersecurity seriously until it’s too late.',
    date: 'June 15, 2023',
    author: 'Security Team',
    category: 'Social Engineering',
    readTime: '8 min read',
    image: img1,
    link: 'https://medium.com/@hacksecure.official/how-hackers-trick-you-without-you-even-knowing-707095c30db5'
  };
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 2,
      title: 'The Hidden Cyber Threats You Ignore Every Day',
      excerpt: 'Most people believe cyber threats are limited to big corporations, government agencies, or high-profile individuals. But what if I told you that YOU — yes, the person reading this — are already a target? Cybercriminals don’t care about your bank balance; they care about access, data, and opportunities. And you give them plenty without realizing it.',
      date: 'May 28, 2023',
      author: 'Alex Johnson',
      category: 'Threat Awareness',
      readTime: '6 min read',
      image: img2,
      link:'https://medium.com/@hacksecure.official/the-hidden-cyber-threats-you-ignore-every-day-4e39cf73ff87'
    },
    {
      id: 3,
      title: 'How Hackers Exploit API Vulnerabilities — API Security Best Practices',
      excerpt: 'APIs (Application Programming Interfaces) are the backbone of modern applications, enabling seamless communication between different systems. However, their increasing adoption has also made them a prime target for cybercriminals. ',
      date: 'May 14, 2023',
      author: 'Sarah Williams',
      category: 'API Security',
      readTime: '5 min read',
      image: img3,
      link:'https://medium.com/@hacksecure.official/how-hackers-exploit-api-vulnerabilities-api-security-best-practices-3807c241d3b2'
    },
    {
      id: 4,
      title: 'Flooding Internal Routers: A Deep Dive into Network Stress Testing',
      excerpt: 'Stress testing routers by flooding them with millions of requests evaluates network stability and resilience under heavy traffic. This method reveals performance limits but involves risks, requiring careful planning and countermeasures to ensure reliability without causing damage.',
      date: 'April 30, 2023',
      author: 'Michael Chen',
      category: 'Network Security',
      readTime: '7 min read',
      image: img4,
      link:'https://medium.com/@hacksecure.official/flooding-internal-routers-a-deep-dive-into-network-stress-testing-6a2dedb71772'
    },
    {
      id: 5,
      title: 'Exploring Cyber Criminology: Understanding the Mindset of Cybercriminals',
      excerpt: 'AI-powered phishing attacks are becoming more sophisticated. This article examines how attackers are leveraging AI and how defenders can stay ahead.',
      date: 'April 15, 2023',
      author: 'Emily Rodriguez',
      category: 'Cyber Criminology',
      readTime: '5 min read',
      image: img5,
      link:'https://medium.com/@hacksecure.official/exploring-cyber-criminology-understanding-the-mindset-of-cybercriminals-4d7f2b265ee8'
    },
  ];
  
  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      {/* Hero section with Title and Description */}
      <div className="blog-hero">
        <img className="blog-hero-image"  src={`https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="" aria-hidden="true" />
        <div className="blog-hero-content">
          <h1>HackSecure Blog</h1>
          <p className="blog-subtitle">
            Insights, research, and expertise from our cybersecurity professionals
          </p>
        </div>
        <div className="blog-hero-background"></div>
      </div>
      
      {/* Search and Filter section */}
      <div className="blog-controls">
        <div className="blog-search">
          <div className="blog-search-box">
            {/* <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg> */}
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="search-button"
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchQuery('')}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>


        {/* search categories by clicking on the button*/}
        <div className="blog-categories">
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
      <div className="max-w-[1200px] mx-[30px]! mb-[40px]! flex flex-col min-[993px]:flex-row gap-[30px] bg-[rgba(17,17,20,0.5)] rounded-[10px] overflow-hidden border border-[#3498db]/20 pr-5!">
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
      </div>
      
      {/* Blog Posts Grid */}
      <div className="blog-posts-section">
        <h2 className="section-title">Latest Articles</h2>
        
        {filteredPosts.length > 0 ? (
          <div className="blog-posts-grid">
            {filteredPosts.map(post => (
              <div className="blog-post-card" key={post.id}>
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-post-category">{post.category}</div>
                </div>
                <div className="blog-post-content">
                  <h3>{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
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

export default BlogPage;