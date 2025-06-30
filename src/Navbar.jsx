import React, { useEffect, useState } from 'react';
import "./App.css";
import logoimg from "./images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ scrollToSection, refs }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  };

  const handleLinkClick = (ref) => {
    scrollToSection(ref);
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto"; 
  };

  return (
    <>
      <nav className="mainheader">
        <div className="logoimgdiv">
          <img src={logoimg} alt="logoimg" className='logo' />
        </div>

        <ul className={isSidebarOpen ? "navlinks sidebar-open" : "navlinks"}>
          <div className="close-icon" onClick={handleSidebarToggle}>
            <FaTimes size={30} />
          </div>

          <li ><a onClick={() => handleLinkClick(refs.homeRef)}>Home</a></li>
          <li ><a onClick={() => handleLinkClick(refs.aboutRef)}>About</a></li>
          <li ><a onClick={() => handleLinkClick(refs.skillsRef)}>Skills</a></li>
          <li ><a onClick={() => handleLinkClick(refs.projectsRef)}>Projects</a></li>
          <li ><a onClick={() => handleLinkClick(refs.contactRef)}>Contact</a></li>
        </ul>

        <div className="mobile-menu-icon" onClick={handleSidebarToggle}>
          <FaBars size={30} color="#FAF4F5" />
        </div>
      </nav>

      {isSidebarOpen && <div className="backdrop" onClick={handleSidebarToggle}></div>}
    </>
  );
};
