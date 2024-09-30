import React from 'react'
import data from '../../assets/works.js'
import Arrow from '../../assets/Arrow.png'
import './Mywork.css'
const Mywork = () => {
  return (
    <div className='mywork' id="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        </div>  
       <div className="mywork-container">
       {data.map((work,index)=>{
       return <img key={index}src={work.w_img} className='images'/>
       })}
       </div>
       <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow}/>
       </div>
    </div>
  )
}

export default Mywork;
