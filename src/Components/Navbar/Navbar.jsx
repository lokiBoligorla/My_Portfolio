import React, { useRef, useState } from 'react'
import logo from '../../assets/Logo.png'
import line from '../../assets/Line.png'
import './Navbar.css'
import menu_open from '../../assets/menuopen.png'
import menu_close from '../../assets/menuclose.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuRef=useRef();
  const openMenu=()=>{
   menuRef.current.style.right="0" 
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px" 
   }
  return (
    <div className='navbar' id="navbar">
      <img src={logo} className='logo'/>
      <img src={menu_open} className='nav-open' onClick={openMenu}/>
      <ul className='un-order' ref={menuRef}>
        <img src={menu_close} alt="" className="nav-mob-open" onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={line}/>:<></>} </li>
        <li> <AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={line}/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#services'><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={line}/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#mywork'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p></AnchorLink> {menu==="Portfolio"?<img src={line}/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink> {menu==="Contact"?<img src={line}/>:<></>}</li>
      </ul>
      <div className='nav-connect'> <AnchorLink className='anchor-link'offset={50} href='#contact'>Contact me</AnchorLink></div>
    </div>
  )
}

export default Navbar
