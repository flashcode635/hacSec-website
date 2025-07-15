import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './site/navbar/navbar';
import New from './site/frontPage/new';
import Courses  from './site/cources/courses';
import InternshipsPage from './site/internship-page/internshipPage';
import InternshipList from './site/internship-page/internListCard';
import ServicesPage, { ServiceForm } from './site/services-page/servicesPage';
import PartnersPage from './site/partners-page/PartnersPage';
import BlogPage from './site/Blogs/blog';
import Contact from './site/ContactUs/contact';
import CertificationPage from './site/Certifications/components/cert';
import SubscriptionPage from './site/Subscription/sub';
import LoadableLearnX from './site/Learnx/learnx';
import CareerPage from './site/career/career';
import Teams from './site/team/team';
import Footer from './site/frontPage/midSection/footer';
import Details from './site/cources/CourceDetails/Details'
import PartnerForm from './site/partners-page/partnerForm';
import { ReportPage } from "./site/Report-page/report";
import TrainingPage from './site/TrainingProgram/file';
import TopListInvest from './site/TopInvestigations/inves';
import EventPage from './site/Events/eventpage';
import CommunityProject from './site/community-projects/comProj';
import LawsAndPolicies from './site/LawsAndPolicies/lnp';
import PageEvents from './site/community-projects/projPage';
export default function Page() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/partner-form" element={<PartnerForm />} />

          <Route path="/Learn_X" element={<LoadableLearnX />} />
          
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path='/reports' element={<ReportPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseName" element={<Details />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/internship" element={<InternshipsPage />} />
          <Route path="/internship/list" element={<InternshipList />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Teams />} />
          <Route path='/trainings' element={<TrainingPage/>}/>
          <Route path="/careers" element={<CareerPage />} />
          <Route path='/events' element={<EventPage></EventPage>}/>
          <Route path="/top-investigations" element={<TopListInvest/>} />
          <Route path='/community-projects' element={<CommunityProject/>}/>
          <Route path='/cyber-laws' element={<LawsAndPolicies/>}/>
          <Route path="/services/service-form" element={<ServiceForm />} />
          <Route path="*" element={
            <New />
            
            } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
