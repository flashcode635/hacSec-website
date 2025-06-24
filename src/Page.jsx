import { BrowserRouter , Routes, Route, ScrollRestoration} from 'react-router-dom';
import './App.css';
import Navbar from './site/navbar/navbar';
import New from './site/frontPage/new';
import Courses  from './site/cources/courses';
import InternshipsPage from './site/internship-page/internshipPage';
import InternshipList from './site/internship-page/internListCard';
import ServicesPage from './site/services-page/servicesPage';
import PartnersPage from './site/partners-page/PartnersPage';
import BlogPage from './site/Blogs/blog';
import Contact from './site/ContactUs/contact';
import CertificationPage from './site/Certifications/components/cert';
import SubscriptionPage from './site/Subscription/sub';
import LoadableLearnX from './site/Resources/learnx';
import CareerPage from './site/career/career';
import ScrollTop from './scrolling';
import Teams from './site/team/team';
import Footer from './site/frontPage/midSection/footer';
import Details from './site/cources/CourceDetails/Details'
import PartnerForm from './site/partners-page/partnerForm';
export default function Page() {
  const courseName= "Learning Process"; // Replace with the actual course name you want to enroll in
  console.log(`Enrolled in course: ${courseName}`);
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="App">
        <Navbar />
        <Routes> 
              <Route path="/" element={<New />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/partner-form" element={<PartnerForm />} />
              <Route path="/Learn_X" element={<LoadableLearnX />} />
              <Route path="/subscription" element={<SubscriptionPage />} />

              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseName" element={<Details />} />
              {/* Dynamic route for course details */}
              <Route path="/blogs" element={<BlogPage />} />
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
      <Footer/>
    </BrowserRouter>
  );
}
