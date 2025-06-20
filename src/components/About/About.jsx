import React from 'react' 
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt';

import profileImage from '../../assets/WhatsApp Image 2024-07-13 at 20.32.03_3151a5b7-modified.png'; // Adjust the path as necessary
const About = () => {
    return (
        <section
        id='about'
        className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
            {/* Left Section */}
            <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
            {/* Greeting */}
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
             Hi, I am
            </h1>
            {/* Name */}
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                Ritik Kumar
            </h2>
            {/* Skills heading with typing effect  */}
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
               <span className='text-white'>
                I am a
                </span>
                {/* <ReactTypingEffect
                    text={[
                        'Engineering Student',
                        'Full Stack Developer',
                        'Web Developer',
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                    cursorRenderer={(cursor) => (
                        <span className='text-[#8245ec]'>{cursor}</span>
                    )}
                ></ReactTypingEffect> */}
                </h3>
                <p className='text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-realaxed'>
                I am a final year engineering student with a passion for web development and a keen interest in exploring the world of AI. I have honed my skills in full-stack development, creating dynamic and responsive web applications. My journey in coding has been fueled by a desire to innovate and solve real-world problems through technology. I am always eager to learn new technologies and improve my skills, making me a versatile and adaptable developer.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1KNGMvoEUiXno6AOCJrisLfvMCgyV3s41/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 trasnform hover:scale-105'
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                            >
                                DOWNLOAD CV
                                </a>
            </div> 
            {/* Right Section */    }
            <div className='md:w-1/2 flex justify-centre md:justify-end'>
            <Tilt
             className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
             >
            <img src={profileImage} 
            alt='Ritik Kumar'
            className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
             tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
            />
             </Tilt>
            </div>
            </div>

        </section>
    )
}
export default About;