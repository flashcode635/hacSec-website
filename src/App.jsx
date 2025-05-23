import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './site/navbar/navbar';
import New from './site/frontPage/new';
import Courses from './site/cources/courses';


import './App.css';
import InternshipsPage from './site/internship-page/internshipPage';
import InternshipList from './site/internship-page/internListCard';
import ServicesPage from './site/services-page/servicesPage';
import PartnersPage from './site/partners-page/PartnersPage';
import BlogPage from './site/Blogs/blog';
import Contact from './site/ContactUs/contact';
import CertificationPage from './site/Certifications/components/cert';
export default function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar />
        <Routes> 
              <Route path="/" element={<New />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/internship" element={<InternshipsPage />} />
              <Route path="/internship/list" element={<InternshipList />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
