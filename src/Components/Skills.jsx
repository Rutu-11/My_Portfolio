import React, { useEffect } from "react";
import { Box, Flex, Heading , Text} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Skills() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 1000,
    });
    AOS.refreshHard();
  },[])
  return (
    <Box className="skills-container" id="/skills" >
    <Heading as={'h1'} data-aos="zoom-in">MY <span> TECHNICAL</span> SKILLS </Heading>
    <Flex className="skills-div">
      
    <Flex data-aos="zoom-in">
      
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          />
            <Text>HTML</Text>
        </Flex>


        <Flex data-aos="zoom-in">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
            />
            <Text >CSS</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
            <Text>JavaScript</Text>
        </Flex>


        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
          />
       
            <Text>Java</Text>
        </Flex>


        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
          />
       
            <Text>React JS</Text>
        </Flex>
      
         
        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
          />
            <Text>Redux</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
          />
            <Text>Node js</Text>
        </Flex>


        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
          />
            <Text>Express</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
          />
            <Text>MongoDB</Text>
        </Flex>
       
        <Flex data-aos="zoom-in">
        <img
            src="https://tse2.mm.bing.net/th?id=OIP.MtJGY28HC-xfJZt0l399lwAAAA&pid=Api&P=0"
            alt="mongoose"
            height={'150px'}
          />
            <Text>Mongoose</Text>
        </Flex >
        
        <Flex data-aos="zoom-in" >
        <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
          />
            <Text>Next JS</Text>
        </Flex>

            
        <Flex data-aos="zoom-in">
        <img
            src="https://avatars0.githubusercontent.com/u/54212428?s=400&v=4"
            alt="Chakra UI"
            style={{'border-radius':"50%"}}
            
          />
            <Text>Chakra UI</Text>
        </Flex>  

          
        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
          />
            <Text>Sass</Text>
        </Flex>
       
        {/* <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
          />
        
            <Text>Telwind</Text>
        </Flex>
           */}
        
        {/* <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
            alt="framer"
          />
            <Text>Framer</Text>
        </Flex> */}
          
        {/* <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
          />
            <Text>Git</Text>
        </Flex> */}
          
        {/* <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
          />
            <Text>Postman</Text>
        </Flex>  */}

        <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
          />

            <Text>Firebase</Text>
        </Flex>
       
    </Flex>

      <Flex className="my-record">
          <Box data-aos="zoom-in">
            <Heading as={'h2'}>1,200+ <Text>Hours of Coding</Text> </Heading>
          </Box>
          <Box data-aos="zoom-in">
          <Heading as={'h2'}>1,000+ <Text>Hours of DSA</Text> </Heading>
          </Box>
          <Box data-aos="zoom-in">
          <Heading as={'h2'}>5+ <Text>Projects</Text> </Heading>
          </Box>
      </Flex>

    </Box>
  );
}

export default Skills;
