import React from 'react'
import './Hero.css'
import Profile from '../../assets/Profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="hero" className='hero'>
    <img src={Profile} alt="profile_pic" className='myimg'/>  
    <h1><span>I'm Lokesh Boligorla,</span> Frontend developer as a beginner</h1>
    <p>I am extremely passionate about creating outstanding websites</p>
    <div className="hero-action">
    <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className="hero-resume">My resume</div>

    </div>
    </div>
  )
}

export default Hero;
