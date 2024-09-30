import React from 'react'
import './Services.css'
import services from '../../assets/Servicesdata.js'
import Arrow from '../../assets/Arrow.png'
const Services = () => {
  return (
    <div id="services"className='services'>
      <div className="services-tilte">
        <h1>My Services</h1>
        <img src=""/>
      </div>
      <div className="services-container">
      {services.map((Service,index)=>{
        return <div key={index} className='services-format'>
            <h3>{Service.id}</h3>
            <h2>{Service.title}</h2>
            <p>{Service.description}</p>
            <div className="services-readmore">
            <p>Read more</p>
            <img src={Arrow}/>
            </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Services;