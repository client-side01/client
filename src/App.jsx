import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
// import About from './components/About'
import Footer from "./components/Footer";
import JobOpportunities from "./components/JobOpportunities";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import Blogs from "./routes/Blogs";
import Categories from "./routes/Categories";
import CompanyBody from "./routes/CompanyBody";
import ContactUs from "./routes/ContactUs";
import ContactUsBody from "./routes/ContactUsBody";
import JobOpportunities01 from "./routes/JobOpportunities01";
import LeadershipBody from "./routes/LeadershipBody";
import ServiceOffer from "./routes/ServiceOffer";
import SubmitRequirement from "./routes/SubmitRequirement";
import SubmitResume from "./routes/SubmitResume";
import SubmitResumeBody from "./routes/SubmitResumeBody";
const App = () => {
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <StatsSection />
              <WelcomePage />
              <JobOpportunities />
              {/* <Projects /> */}
              <Footer />
            </>
          }
        />
        <Route 
          path="/CompanyOverview"
          element={
          <>
          <CompanyBody />
          <Footer />
          </>
          }
        />
        <Route 
          path="/LeadershipTeam" 
          element={
          <>
          <LeadershipBody />
          <Footer />
          </>
          }
        />
        <Route path="/SubmitRequirement" element={<SubmitRequirement />} />
        <Route path="/ServiceOffer" element={<ServiceOffer />} />
        <Route
          path="/SubmitResume"
          element={
            <>
              <SubmitResume />
              <SubmitResumeBody />
              <Footer />
            </>
          }
        />
        <Route path="/Opportunities" element={<JobOpportunities01 />} />
        <Route path="/Posts" element={<Blogs />} />
        <Route
          path="/Contact"
          element={
            <>
              <ContactUs />
              <ContactUsBody />
              <Footer />
            </>
          }
        />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      {/* <Header />
      <StatsSection />
      <JobOpportunities />
      <Projects />
      <Footer /> */}
    </div>
  );
};

export default App;
