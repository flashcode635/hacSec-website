import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './site/navbar/navbar';
import New from './site/frontPage/new';
import Courses from './site/cources/courses';
import InternshipsPage from './site/internship-page/internshipPage';
import InternshipList from './site/internship-page/internListCard';
import ServicesPage from './site/services-page/servicesPage';
import PartnersPage from './site/partners-page/PartnersPage';
import BlogPage from './site/Blogs/blog';
import Contact from './site/ContactUs/contact';
import CertificationPage from './site/Certifications/components/cert';
import SubscriptionPage from './site/Subscription/sub';
import ResourcePage from './site/Resources/resource';
import CareerPage from './site/career/career';
import ScrollToTop from './scrolltop';
import Teams from './site/team/team';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes> 
              <Route path="/" element={<New />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/resources" element={<ResourcePage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/internship" element={<InternshipsPage />} />
              <Route path="/internship/list" element={<InternshipList />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Teams></Teams>}/>
              <Route path="/careers" element={<CareerPage />} />
              <Route path="*" element={<New />} />
              {/* Fallback route to handle any unmatched paths */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}
