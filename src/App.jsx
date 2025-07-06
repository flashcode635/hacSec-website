import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";
import AuthPage from "./site/signUpAuth/front";
import LoaderJnr from './LoadingScreen';
import Dashboard from "./site/Dashboard/Dashboard";

// Import components for dashboard routes
import BlogPage from './site/Blogs/blog';
import Courses from './site/cources/courses';
import InternshipsPage from './site/internship-page/internshipPage';
import TopListInvest from './site/TopInvestigations/inves';
import { ReportPage } from "./site/Report-page/report";
import PageEvents from './site/community-projects/projPage';
import LawsAndPolicies from './site/LawsAndPolicies/lnp';
import TrainingPage from './site/TrainingProgram/file';
import CommunityProject from './site/community-projects/comProj';
import LoadableLearnX from "./site/Learnx/learnx";
import Details from "./site/cources/CourceDetails/Details";
export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/Learn_X" element={<LoadableLearnX />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={
              <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <h1>Welcome to your Dashboard</h1>
                <p>Select an option from the sidebar to view the content.</p>
              </div>
            } />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseName" element={<Details />} />
            <Route path="internship" element={<InternshipsPage />} />
            <Route path="top-investigations" element={<TopListInvest />} />
            <Route path="quiz" element={<LoaderJnr />} />
            <Route path="tools" element={<LoaderJnr />} />
            <Route path="reports" element={<ReportPage />} />
            <Route path="audio-books" element={<div>Audio Books Page - Coming Soon!</div>} />
            <Route path="events" element={<PageEvents />} />
            <Route path="cyber-laws" element={<LawsAndPolicies />} />
            <Route path="trainings" element={<TrainingPage />} />
            <Route path="community-projects" element={<CommunityProject />} />
          </Route>
          <Route path="/*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
