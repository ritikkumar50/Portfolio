import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certification from "./components/Certification/Certifiaction";
import Work from "../Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BLurBlob from "./BLurBlob";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import './App.css'
import Education from "./components/Education/Education";
import ChatBot from "./chatbot/chatbot";

const App = () => {
  return (
    <div className="bg-[#0d0c1a]">

      <BLurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">

        <Navbar />
        <About />
        <Skills />
        <Certification />
        <Education />
        <Work />
        <Contact />
        <div className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-end gap-3">
          <ChatBot />
          <div className="mb-1 mr-[5rem]">
            <ScrollToTopButton />
          </div>
        </div>

      </div>

      <Footer />

    </div>

  );
};

export default App;
