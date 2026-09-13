import React from 'react';
import { useNavigate } from 'react-router-dom';
import './courses.css';
import './preview.css';
import coursesList from './courseList';

const enroll = (course) => {
  const name = course.title;
  console.log(`Enrolled in ${name}`);
};

const Courses = () => {
  const navigate = useNavigate();

  const toUrlCourseName = (title) =>
    encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));

  const handleEnroll = (course) => {
    console.log(`Enrolled in ${course.title}`);
    enroll(course);
    navigate(`/courses/${toUrlCourseName(course.title)}`);
  };

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Hack Secure Micro Modules</h1>
          <p className='text-center w-screen p-0! '>Master the skills needed to protect digital assets and combat cyber threats</p>
        </div>
      </div>

      <div className="courses-container">
        <div className="courses-header">
          <h2>Available Courses</h2>
          <p className=''>Explore our comprehensive range of cybersecurity courses designed by industry experts</p>
        </div>

        <div className="courses-grid">
          {coursesList.map((course) => (
            <div className="course-card-wrapper" key={course.id}>
              <div className="course-card">
                <div className="course-image-container">
                  <div
                    className="course-image"
                    style={{ backgroundImage: `url(${course.image})` }}
                  ></div>
                  <div className="course-level-tag">
                    {course.level}
                  </div>
                </div>

                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  <div className="course-info-row">
                    <span className="duration">⏱ {course.duration}</span>
                    <span className="modules">📚 {course.modules} Modules</span>
                  </div>

                  <div className="course-actions">
                    <button className="enroll-button" onClick={() => handleEnroll(course)}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-cta">
        <div className="cta-content">
          <h2>Ready to advance your cybersecurity career?</h2>
          <p>
            Join thousands of security professionals who have transformed their careers
            with our training programs
          </p>
          <button className="bg-transparent text-[#38bdf8] border-2 border-[#38bdf8] md:px-6! md:py-2.5! rounded-lg cursor-pointer font-semibold text-base transition-all duration-200 ease-in-out hover:bg-[#38bdf8] hover:text-[#020617] hover:shadow-[0_0_13px_rgba(49,159,206,0.4)]">View All Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
