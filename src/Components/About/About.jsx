import React from 'react'
import './About.css'
import Photo from '../../assets/FullPhoto.jpg'

const About = () => {
  return (
    <div id="about"className='about'>
     <div className="about-title">
     <h1>About Me</h1> 
     <img src=""/>   
    </div> 
    <div className="about-section">
        <div className="about-left">
          <img src={Photo} className='myimg'/>  
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Creating dynamic web applications that prioritize both aesthetics and usability. Together, we can bring your digital vision to life</p>
            <p>Transforming complex ideas into elegant, user-friendly designs. My mission is to enhance user experiences with every line of code.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>    
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>  
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>  
            <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>  
            <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div> 
            </div>  
        </div>
        
    </div>
    <div className="about-achivements">
      <div className="about-achivement">
        <h1>Responsive Web Design</h1>
        <p>Designed and implemented responsive web pages that adapt to different screen sizes, improving accessibility and user experience across devices.</p>
      </div>
      <hr/>
      <div className="about-achivement">
        <h1>Learning and Certification</h1>
        <p>Completed online courses or certifications in frontend technologies (e.g., JavaScript, React) to solidify knowledge and skills.</p>
      </div>
      <hr/>
      <div className="about-achivement">
        <h1>Version Control Experience</h1>
        <p>Gained experience with Git and GitHub for version control, managing project workflows, and collaborating with others effectively.</p>
      </div>
    </div>
    </div>
  )
}

export default About;
