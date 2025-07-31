import React, { useState, useEffect } from "react";
import { Certifications } from "../../constants"; // Import your data
import CourseraLogo from '../../assets/Certificate_logo/Coursera.png';
import InfosysLogo from '../../assets/Certificate_logo/Infosys.png';

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
  if (selectedCert) console.log(selectedCert);
}, [selectedCert]);

  const handleCloseModal = () => {
    setSelectedCert(null);
  }

  return (
    <>
      <section
        id="Certification"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
      >

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            Courses and credentials I’ve completed to sharpen my technical edge.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute sm:left-1/2 left-0 transform translate-x-0 sm:-translate-x-0 w-1 bg-white h-full"></div>

          {/* Experience Entries */}
          {Certifications.map((Certification, index) => (
            <div
              key={Certification.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                }`}
            >
              {/* Timeline Circle */}
              {/* <div className="absolute  left-0 sm:left-10 transform  translate-x-0 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={Certification.img}
                  alt={Certification.tittle}

                  className="w-full h-full object-cover rounded-full"
                />
              </div> */}

              {/* Content Section */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.5)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                  } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-450 hover:scale-110`}
                onClick={() => setSelectedCert(Certification)}
                style={{ cursor: "pointer" }}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={Certification.img}
                      alt={Certification.title}

                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {Certification.title}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {Certification.title}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">Completed:{Certification.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 italic">{Certification.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {Certification.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              {/* <div className="w-full flex justify-centre bg-gray-900 px-4">
                <img src={selectedCert.image} alt={selectedCert.tittle} className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl" />
              </div> */}
             <img
  src={selectedCert.modalImage}
  alt={`${selectedCert.title} certificate`}
  className="w-[90%] max-h-[400px] object-contain mx-auto mb-6"
/>
    
              <div className="lg:p-8 p-6">

                <h3 className="lg:text-3xl font bold text-white mb-4 text-md">
                  {selectedCert.tittle}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedCert.desc}
                </p>
                <div className=" flex flex-wrap gap-2 mb-6">
                  {selectedCert.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedCert.website} target="_blank" rel="noopener noreferrer"
                    className="w-1/2 bg-purple-800 hover:bg-purple-800 text-gray-400 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-centre">
                    View
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certification;