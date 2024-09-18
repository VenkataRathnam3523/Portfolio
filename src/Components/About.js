import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import rasi from '../LottieFiles/rasi.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Venkatarathnam Kuntru</b> and I am from Hyderabad, India.
            I'm a <b>Full stack developer</b>  with a <b>Bachelor of Technology in Agricultural Engineering</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at Anarghya Communication Pvt. Ltd. which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding In addition to coding, I enjoy gardening, cooking, and listening to music. I’m looking forward to new challenges and opportunities to further develop my career.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={rasi} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Java' />
        <Skills skill='MySql' />
        <Skills skill='SpringBoot'/>
        <Skills skill='HTML'/>
        <Skills skill='CSS'/>
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About