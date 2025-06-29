import React from "react";
import './report.css'
import './searchBox.css';

import { useState } from 'react';
const reports = [
  {
    id: 1,
    title: 'Hi-Tech Crime Trends 2023/2024',
    category: 'APT & Cybercrime',
    date: 'May 29, 2024',
    description: 'An in-depth analysis of the latest trends and developments in the world of high-tech crime.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-website-3.png.webp',
  },
  {
    id: 2,
    title: 'Crane: Ransomware-as-a-Service ',
    category: 'Ransomware',
    date: 'May 22, 2024',
    description: 'Discover the origins, tactics, and impact of the Crane ransomware family.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-11.png.webp',
  },
  {
    id: 3,
    title: "The Scammers’ Playbook: Inside Global Fraud-as-a-Service",
    category: 'Scam & Fraud',
    date: 'May 15, 2024',
    description: 'A deep dive into the sophisticated world of Fraud-as-a-Service (FaaS) operations.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-website-3.png.webp',
  },
  {
    id: 4,
    title: 'The Art of Deception: Unmasking the Techniques of Modern Phishing Attacks',
    category: 'Phishing',
    date: 'April 30, 2024',
    description: 'Learn how to identify and protect against the latest phishing techniques used by cybercriminals.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-11.png.webp',
  },
    {
    id: 5,
    title: 'Digital Shadows: The Underground Economy of Stolen Data',
    category: 'Data Breach',
    date: 'April 18, 2024',
    description: 'An investigation into the dark web marketplaces where stolen data is bought and sold.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-website-3.png.webp',
  },
  {
    id: 6,
    title: 'The Human Factor: Social Engineering and Your Weakest Link',
    category: 'Social Engineering',
    date: 'April 5, 2024',
    description: 'Understand the psychology behind social engineering attacks and how to build a human firewall.',
    imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-11.png.webp',
  },
  // {
  //   id: 7,
  //   title: 'Securing the IoT: Defending Against Emerging Threats',
  //   category: 'IoT Security',
  //   date: 'March 28, 2024',
  //   description: 'A comprehensive guide to the security challenges and solutions for the rapidly expanding IoT ecosystem.',
  //   imageUrl: 'https://www.group-ib.com/wp-content/uploads/cover-website-3.png.webp',
  // },
];

export const ReportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* hero-section */}
      <div className="report-page-hero-section w-full h-[80vh] ">
        <div className="image-report-hero md:h-[70vh] w-[100vw] flex justify-center items-center ">
          <div className=" md:text-5xl text-3xl w-fit pl-2 item-center " style={{ margin: '60px', fontWeight: 'bolder',  textAlign: 'center', placeSelf: 'center' }}>
            <span>  Cyber Security Reports </span>
            <p className="text-lg" style={{color:'#808080',lineHeight:'1', fontFamily:'system-ui', fontWeight:'500'}}> Find detailed insights, data analyses, and summaries designed to inform decision-making and track progress across key areas. </p>
          </div>
        </div>
      </div>

<div className="collection"> 
    <h1 style={{display:'flex', alignSelf:'center', justifyContent:'center',textAlign:'center'}}> Research hub </h1>
      {/* Search Bar container  */}
      <div className=" py-8 px-4 md:px-8 " style={{ margin:'40px', marginTop:'0', width:'40vw'}} >
        {/* actual searchbar cde  */}
        {/* <div className="max-w-4xl mx-auto relative" style={{padding:'15px 2px'}}>
           <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none" style={{paddingLeft:'5px',padding:'7px' , marginTop: '5px', marginBottom: '4px'}}>
             <svg className="h-5 w-5 text-gray-400 pl-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text" style={{paddingLeft:'30px'}}
            placeholder="Search reports..."
            className="w-full p-4 pl-10 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
        <div className="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="query"
    className="input"
    type="search"
    placeholder="Search..."
    name="searchbar"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
          </div> 
      </div>
      {/* Report Cards */}
      <div className=" py-12" style={{}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90vw]">
            {filteredReports.map((report) => (
              <div key={report.id} className=" rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
                <img className="w-full h-[60%] object-cover" src={report.imageUrl} alt={report.title} />
                <div className="p-6 " style={{marginLeft:'14px', marginRight:'14px'}}>
                  <p className="report-category text-sm font-semibold tracking-wide">{report.category}</p>
                  <h3 className="title-of-card text-xl font-bold text-white mt-2 ">{report.title}</h3>
                  <p className="report-date text-gray-500 mt-2 ">{report.date}</p>
                  <p className="report-description mt-4 h-24 overflow-hidden">{report.description}</p>
                  <a href="https://drive.google.com/file/d/1m_J2I1tqkZpOFOoZNHp-NsqmUS8z-1IQ/view" className="inline-flex items-center mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">
                    Read More
                    <span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
    </>
  );
};