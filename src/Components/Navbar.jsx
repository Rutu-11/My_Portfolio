import React, { useRef, useState } from "react";
import {
  Flex,
  Spacer,
  Heading,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import {Link} from 'react-scroll'
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();
  const scrollRef = useRef(null)
  const showNavbar = () => {
    navRef.current.classList.toggle("rsponsive_navbar");
  };
  (window).scroll(function(){
    if ((window).scrollTop() >= 30) {
       ('header').addClass('shadow-header');
    }
    else {
       ('header').removeClass('shadow-header');
    }
});

const changeBackgraound = ()=>{
  // console.log(window.scrollY)
  if(window.scrollY >=80){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
}
window.addEventListener('scroll',changeBackgraound);
  return (
    <Flex className={navbar ? 'navbar active': 'navbar'} >
      <Heading as="h1" size="xl" className="heading">
        RUTU<span>JA</span>{" "}
      </Heading>
      <Spacer/>
      <Flex className="innerNavDiv" ref={navRef}  >
        <Box onClick={showNavbar}  >
         
          <Link to="/home" className="link" smooth={true} offset={-100} duration={500} onClick={showNavbar}  >
            Home
          </Link>
          
          
        </Box>

        <Box onClick={showNavbar} >
          <Link to="/about" className="link" smooth={true} offset={-100} duration={500} onClick={showNavbar}>
            About
          </Link>
        </Box>

        <Box onClick={showNavbar}  >
          <Link to="/skills" className="link" smooth={true} offset={-100} duration={500} onClick={showNavbar}>
            Skills
          </Link>
        </Box>

        <Box onClick={showNavbar}  >
          <Link to="/projects" className="link"smooth={true} offset={-100} duration={500} onClick={showNavbar}>
            Projects
          </Link>
        </Box>

        <Box onClick={showNavbar}  >
          <Link to="/contact" className="link" smooth={true} offset={-100} duration={500} onClick={showNavbar} >
            Contact
          </Link>
        </Box>
       
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>

        
      </Flex>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
    </Flex>
  );
}

export default Navbar;
