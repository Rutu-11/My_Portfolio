import React, { useEffect } from "react";
import {
  Flex,
  Spacer,
  Heading,
  Button,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsDownload } from "react-icons/bs";
import { AiFillPhone, AiFillEye, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import resume from '../utils/Rutuja_Dhekolkar_Resume_29-03-2023-02-12-20.pdf';
function Home() {
  const text = useTypewriter({
    words: ["Full Stack Web Developer"],
    loop: {},
  });

  return (
    <Flex className="home">
      <Box className="home-content">
        <Heading as="h3" className="heading">
          Hello, My name is
        </Heading>
        <Heading as="h1" className="heading">
          Rutuja Dhekolkar
        </Heading>
        <Heading as="h3" className="heading">
          I am a<span>{text[0]}</span>
          <Cursor />
        </Heading>
        <Text>
          A passionate Full Stack Web Developer skilled in React JS, MongoDB and
          some other libraries and frameworks. Eager to learn new technologies
          and seek challenging opportunities for professional growth.
        </Text>

        <Box className="social-media">
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<GrLinkedin />}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/rutujadhekolkar/",
                "_blank"
              );
            }}
          />
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<BsGithub />}
            onClick={() => {
              window.open("https://github.com/Rutu-11", "_blank");
            }}
          />
          <a href="tel:+917996314566">
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<AiFillPhone />}
            
          />
          </a>

          <a href="mailto:rutujadhekolkar97@gmail.com">
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<SiGmail />}
            
          />
          </a>
        </Box>

        <a href={resume}>
        <Button
          colorScheme="#fb641b"
          rightIcon={<AiOutlineEye color="white" className="icon" />}
          variant="solid"
          className="downloadBtn"
        >
          Resume
        </Button>
          </a>

        <a href={resume} download='Resume' >
        <IconButton
          className="downloadBtn"
          //   variant='outline'
          colorScheme="#fb641b"
          aria-label="Send email"
          icon={<BsDownload className="icon" />}
        />
        </a>
      </Box>

      <Flex className="home-image">
        <img
          src={require("../utils/mypic2.jpg")}
          alt=""
        />
      </Flex>
    </Flex>
  );
}

export default Home;
