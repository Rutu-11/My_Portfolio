import React from "react";
import { Box, Flex, Heading , Text} from "@chakra-ui/react";
function Skills() {
  return (
    <Box className="skills-container">
    <Heading as={'h1'}>My <span>Skills</span> </Heading>
    <Flex className="skills-div">
      
    <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          />
            <Text>HTML</Text>
        </Flex>


        <Flex>
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
            />
            <Text >CSS</Text>
        </Flex>

        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
            <Text>JavaScript</Text>
        </Flex>


        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
          />
       
            <Text>Java</Text>
        </Flex>


        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
          />
       
            <Text>React JS</Text>
        </Flex>
      
         
        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
          />
            <Text>Redux</Text>
        </Flex>

        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
          />
            <Text>Node js</Text>
        </Flex>


        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
          />
            <Text>Express</Text>
        </Flex>

        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
          />
            <Text>MongoDB</Text>
        </Flex>
       
        <Flex>
        <img
            src="https://cms-assets.tutsplus.com/uploads/users/34/syllabuses/1228/preview_image/mongoose.jpg"
            alt="mongoose"
            height={'150px'}
          />
            <Text>Mongoose</Text>
        </Flex>
        
        <Flex>
        <img
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
          />
            <Text>Next JS</Text>
        </Flex>

            
        <Flex>
        <img
            src="https://avatars0.githubusercontent.com/u/54212428?s=400&v=4"
            alt="Chakra UI"
            style={{'border-radius':"50%"}}
            
          />
            <Text>Chakra UI</Text>
        </Flex>  

          
        <Flex>
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
          />
            <Text>Sass</Text>
        </Flex>
       
        <Flex>
        <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
          />
        
            <Text>Telwind</Text>
        </Flex>
          
        
        <Flex>
        <img
            src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
            alt="framer"
          />
            <Text>Framer</Text>
        </Flex>
          
        <Flex>
        <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
          />
            <Text>Git</Text>
        </Flex>
          
        <Flex>
        <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
          />
            <Text>Postman</Text>
        </Flex> 

        <Flex>
        <img
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
          />

            <Text>Firebase</Text>
        </Flex>
       
    </Flex>
    </Box>
  );
}

export default Skills;
