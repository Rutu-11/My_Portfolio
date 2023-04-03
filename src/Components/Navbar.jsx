import React, { useRef } from "react";
import {
  Flex,
  Spacer,
  Heading,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const navRef = useRef();

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
  return (
    <Flex className="navbar" >
      <Heading as="h1" size="xl" className="heading">
        RUTU<span>JA</span>{" "}
      </Heading>
      {/* <Spacer/> */}
      <Flex className="innerNavDiv" ref={navRef}>
        <Box onClick={showNavbar}>
          {/* <Box> */}
          <Link to="/" className="link">
            Home
          </Link>
          {/* </Box> */}
          
        </Box>

        <Box onClick={showNavbar}>
          <Link to="/about" className="link">
            About
          </Link>
        </Box>

        <Box onClick={showNavbar}>
          <Link to="/skills" className="link">
            Skills
          </Link>
        </Box>

        <Box onClick={showNavbar}>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </Box>

        <Box onClick={showNavbar}>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </Box>
        {/* <FaBars/> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>

        {/* <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            className='nav-btn nav-close-btn'
            onClick={showNavbar}
            icon={<FaTimes/>}
            
          />
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            className='nav-btn'
            onClick={showNavbar}
            icon={<FaBars/>}
            
          /> */}
      </Flex>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
    </Flex>
  );
}

export default Navbar;
