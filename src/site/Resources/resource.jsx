import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './resource.css';
import GetStarted from '../Components/resource-btn';
import GradientButton from '../Components/resource-btn';
// import defensive from './defensive.jpg';

function ResourceCard({ title, description, features, imageUrl, link }) {
  return (  
    <div className="resource-card">
      <div className="resource-icon">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="resource-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={link} className="resource-link">Learn More →</a>
    </div>
  );
};

const ResourcePage = () => {
  return (
    <>
      <div className="resource-page">
        {/* Hero Section */}
        <section className="resource-hero">
          <div className="resource-hero-content">
            <h1>Learn X </h1>
            <p>Everything you need—tools, internships, Certifications, and smarts—to lock down your digital assets like a pro.</p>
            {/* <button className="hero-cta-button">Request a Consultation</button> */}
            <GradientButton name="Let's start" />
          </div>
        </section>

      {/* resource Overview Section */}
      <section className="resource-overview">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}> 
        <h1> What We Offer 
          </h1>
          <p style={{width: '80%', margin: '0 auto'}}>HackSecure provides a comprehensive suite of resources to help you master cybersecurity, from blogs and courses to certifications and internships.</p>
      </div>
        <div className="container">
          
          <div className="resource-grid">  {/* resource Cards Grid - has all 4 resource cards  */}
            
                {/* resource Card 1 - Blogs */}
                  <ResourceCard
                    title="Blogs"
                    description="Explore blogs packed with pro tips, threat intel, and security best practices."
                    features={[
                      "Social Engineering",
                      "API Security",
                      "Network Security",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/security-checked.png"
                    link="#blog"
                  />
                    {/* resource Card 2 - Courses */}
                    <ResourceCard
                    title="Courses"
                    description="Comprehensive courses to level up your cybersecurity knowledge and skills."
                    features={[
                      "Ethical Hacking Fundamentals",
                      "Advanced Network Security",
                      "Reverse Engineering",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/book.png"
                    link="#courses"
                  />

                  {/* resource Card 3 - Certifications */}
                          <ResourceCard
                    title="Certifications"
                    description="Advance your career with top cyber certs—gain skills, credibility and digital defense!"
                    features={[
                      "VAPT",
                      "CompTIA Security+",
                      "Certified Ethical Hacker (CEH)",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/training.png" 
                    link="#certification"
                  />

                    {/* resource Card 4 - Internships */}
                    <div className="resource-card">
                      <div className="resource-icon">
                        <img src="https://img.icons8.com/ios/50/3498db/artificial-intelligence.png" alt="Internships" />
                      </div>
                      <h3>Internships</h3>
                      <p>Hands-on cybersecurity internships with experts, tech, and real-world challenges.</p>
                      <ul className="resource-features">
     
                        <li>Targeted Attack Intelligence</li>              
                        <li>Vulnerability Assessment</li>
                        <li>Incident Response</li>
                 
                        <li>And Many More...</li>
                      </ul>
                      <a href="#intern" className="resource-link">Learn More →</a>
                    </div>

                     {/* resource Card  - Quiz */}
                          <ResourceCard
                    title="Quiz"
                    description="Test your knowledge with our interactive quizzes and challenges."
                    features={[
                      "VAPT",
                      "CompTIA Security+",
                      "Certified Ethical Hacker (CEH)",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/training.png" 
                    link="#quiz"
                  />

                      {/* resource Card  - Tools */}
                          <ResourceCard
                    title="Tools"
                    description="Test your knowledge with our interactive Tools quizzes and challenges."
                    features={[
                      "VAPT",
                      "CompTIA Security+",
                      "Certified Ethical Hacker (CEH)",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/screwdriver.png"
                    link="#Tools"
                  />

                  {/* resource card- Pamphlets */}
                  <ResourceCard
                    title="Pamphlets"
                    description="Download our informative pamphlets to enhance your cybersecurity knowledge."
                    features={[
                      "Quick Reference Guides",
                      "Best Practices",
                      "Threat Awareness",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/artificial-intelligence.png"
                    link="#pamphlets"
                  />

                  {/* resource card- Podcast */}
                  <ResourceCard
                    title="Podcast"
                    description="Listen to our podcast for expert insights and discussions on the latest in cybersecurity."
                    features={[
                      "Interviews with Industry Experts",
                      "Deep Dives into Cyber Threats",
                      "Tips and Best Practices",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/podcast.png"
                    link="#podcast"
                  />

                  {/* resource card- Events */}
                  <ResourceCard
                    title="Events"
                    description="Join our live events and webinars to stay updated on the latest trends in cybersecurity."
                    features={[
                      "Expert Panels",
                      "Hands-on Workshops",
                      "Networking Opportunities",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/play.png"
                    link="#events"
                  />

                  {/* resource card- Cyber Laws and Policies */}
                  <ResourceCard
                    title="Cyber Laws and Policies"
                    description="Stay informed about the latest cybersecurity laws and policies that impact your organization."
                    features={[
                      "Compliance Guidelines",
                      "Data Protection Regulations",
                      "Incident Reporting Requirements",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/shield.png"
                    link="#cyber-laws"
                  />
                  {/* trainings */}
                  <ResourceCard
                    title="Trainings"
                    description="Enhance your skills with our hands-on training sessions led by industry experts."
                    features={[
                      "Live Workshops",
                      "Hands-on Labs",
                      "Real-world Scenarios",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/training.png"
                    link="#trainings"
                  />

                  {/* Community Projects */}
                  <ResourceCard
                    title="Community Projects"
                    description="Get involved in our community-driven projects to collaborate and learn from peers."
                    features={[
                      "Open Source Contributions",
                      "Collaborative Learning",
                      "Mentorship Opportunities",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/project.png"
                    link="#community-projects"
                  />

            </div>
        </div>
      </section>

      {/* Detaile Sections- have  all the details needed for each resource */}

      {/* Blog Section */}
      <section id="blog" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Blog</h2>
              <p>Our blog delivers insights to help you spot and fix vulnerabilities before attackers can exploit them.</p>
              <p>Packed with real-world tactics and cutting-edge tools, we break down how cyber threats work—so you can stay one step ahead with practical, expert-backed advice.</p>
              <Link to="/blog" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image blog-image"></div>
          </div>
        </div>
      </section>
{/* Courses Section */}
      <section id="courses" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Courses</h2>
              <p>Explore our comprehensive courses designed to equip you with the skills and knowledge needed to excel in cybersecurity, from foundational concepts to advanced techniques.</p>
              <p>Our expert instructors guide you through hands-on labs and real-world scenarios, ensuring you gain practical experience and confidence in your abilities.</p>
              <Link to="/courses" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image defensive-image"></div>
          </div>
        </div>
      </section>

        {/* Certification */}
      <section id="certification" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Certifications</h2>
             <p>
              Safeguard your future and outpace cyber adversaries with our industry-leading cybersecurity certifications.
              </p> 
             <p>
              Our expertly crafted programs are tailored to validate and elevate your expertise, empowering you to thrive in today’s fast-paced and ever-changing cybersecurity landscape. Gain practical, in-demand skills recognized by top employers and accelerate your career with confidence.
              </p>
              <Link to="/certification"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image intelligence-image"></div>
          </div>
        </div>
      </section>
{/* Internships Section */}
      <section id="intern" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Internships</h2>
              <p>
                Experience immersive cybersecurity internships that put you at the forefront of digital defense. Collaborate with industry experts, leverage advanced technologies, and tackle real-world security challenges that matter.
              </p>
              <p>
                Build practical skills, gain exclusive insights, and make an immediate impact in the cybersecurity field.
              </p>
                  <Link to="/internship"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Quiz</h2>
              <p>Test your cybersecurity knowledge with our interactive quizzes and challenges. Sharpen your skills, learn new concepts, and stay updated on the latest trends in cybersecurity.</p>
              <p>Whether you're a beginner or an experienced professional, our quizzes are designed to enhance your understanding and keep you engaged.</p>
              <Link to="/quiz"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image defensive-image"></div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Tools</h2>
              <p>
                Explore our curated selection of cybersecurity tools and resources designed to enhance your skills and knowledge.
              </p>
              <p>
                From penetration testing frameworks to threat intelligence platforms, our tools empower you to tackle real-world challenges.
              </p>
              <Link to="/tools"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* Pamphlets Section */}
      <section id="pamphlets" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Pamphlets</h2>
              <p>Download our informative pamphlets to enhance your cybersecurity knowledge. Our pamphlets cover a wide range of topics, providing quick reference guides and best practices to help you stay informed and secure.</p>
              <p>Whether you're looking for tips on threat awareness or best practices for securing your digital assets, our pamphlets are a valuable resource.</p>
              <Link to="/pamphlets"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image intelligence-image"></div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Podcast</h2>
              <p>Listen to our podcast for expert insights and discussions on the latest in cybersecurity. Our podcast features interviews with industry leaders, deep dives into cyber threats, and practical tips to help you stay secure.</p>
              <p>Stay informed and engaged with our regular episodes that cover a wide range of cybersecurity topics.</p>
              <Link to="/podcast"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image defensive-image"></div>
          </div>
        </div>
      </section>

      {/* Trainings Section */}
      <section id="trainings" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Trainings</h2>
              <p>Enhance your skills with our hands-on training sessions led by industry experts.</p>
              <p>Participate in live workshops, hands-on labs, and real-world scenarios to gain practical experience.</p>
              <Link to="/trainings"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Events</h2>
              <p>Join our live events and webinars to stay updated on the latest trends in cybersecurity.</p>
              <p>Participate in expert panels, hands-on workshops, and networking opportunities to enhance your knowledge and skills.</p>
              <Link to="/events"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* Community Projects Section */}
      <section id="community-projects" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Community Projects</h2>
              <p>Join our vibrant community of cybersecurity enthusiasts and professionals. Share knowledge, ask questions, and collaborate on projects to enhance your skills.</p>
              <p>Participate in discussions, attend meetups, and connect with like-minded individuals who are passionate about cybersecurity.</p>
              <Link to="/community"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image blog-image"></div>
          </div>
        </div>
      </section>

      

      {/* Cyber Laws and Policies Section */}
      <section id="cyber-laws" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Cyber Laws and Policies</h2>
              <p>Stay informed about the latest cybersecurity laws and policies that impact your organization.</p>
              <p>Understand compliance guidelines, data protection regulations, and incident reporting requirements to ensure your organization remains secure and compliant.</p>
              <Link to="/cyber-laws"  className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image intelligence-image"></div>
          </div>
        </div>    
      </section>

      {/* CTA Section */}
      <section className="resource-cta">
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

export default ResourcePage; 