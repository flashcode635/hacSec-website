import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';

const sidebarNavItems = [
    // { display: 'HackSecure', to: '/dashboard' },
    { display: 'Blogs', to: '/dashboard/blogs' },
    { display: 'Micro Modules', to: '/dashboard/courses' },
    { display: 'Internships', to: '/dashboard/internship' },
    { display: 'Top Investigations', to: '/dashboard/top-investigations' },
    { display: 'Quiz', to: '/dashboard/quiz' },
    { display: 'Tools', to: '/dashboard/tools' },
    { display: 'Reports', to: '/dashboard/reports' },
    { display: 'Audio Books', to: '/dashboard/audio-books' },
    { display: 'Events', to: '/dashboard/events' },
    { display: 'Cyber Laws and Policies', to: '/dashboard/cyber-laws' },
    { display: 'Training Program', to: '/dashboard/trainings' },
    { display: 'Community Projects', to: '/dashboard/community-projects' },
];

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard__sidebar'>
                <div className='sidebar__brand'>
                   <NavLink to='/dashboard'>HackSecure</NavLink>
                </div>
                <div className='sidebar__nav'>
                    {sidebarNavItems.map((item, index) => (
                        <NavLink
                            to={item.to}
                            key={index}
                            className={({ isActive }) => `sidebar__nav-item ${isActive ? 'active' : ''}`}
                        >
                            {item.display}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='dashboard__content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
