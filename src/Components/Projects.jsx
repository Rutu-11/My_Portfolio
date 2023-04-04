import React, { useEffect } from 'react'
import AOS from 'aos'
import {Box, Flex, Heading,Grid, GridItem, Text, Button , IconButton} from '@chakra-ui/react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import Aos from 'aos';

function Projects() {
  // useEffect(()=>{
  //   Aos.init({
  //     offset:300,
  //     duration:1000,
  //   });
  // },[])
  return (
    <Box className='projects-container'>
        <Heading as={'h1'}>
            LATEST <span>PROJECTS</span>
        </Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(2, 1fr)']} gap={6} className='grid-container'  >
        <Box data-aos="flip-right">
            <Box>
            <img src={require("../utils/home1.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Spotify <span>Clone</span> </Heading>
            <Text  m={'auto'} fontSize='2xl' ><b> Spotify is a digital music service that gives you access to millions of songs.</b></Text>
        
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Spotify-clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://spotify-clone4me.netlify.app/", "_blank");
                }}
              />
              
            </Box>


            </Box>
            {/* buttons */}

            <Box >
                <Heading as={'h4'}>Spotify <span>Clone</span> </Heading>
                <Box >
                  <Box  textAlign={'left'} >
                  <Text><b>Features:  </b>  Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text>
                  <Text><b>Techstack: </b> React, Redux, Chakra-UI, Styled-Component, Framer-motion </Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
                    <li>Added filter functionality, page linking, and animations.</li>
                    
                    </Text>
                  </Box>
                  
                </Box>  
                <Text  m={'auto'} fontSize='2xl'><b>It is a collaborative project of four members completed in five days.</b></Text>   
            </Box>

            
        </Box>

        <Box data-aos="flip-right">
          <Box>
            <img src={require("../utils/Flipkart-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Flipkart <span>Clone</span> </Heading>
            <Text m={'auto'} fontSize='2xl' ><b> Flipkart is one of India’s leading e-commerce marketplaces.</b></Text> 
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Flipkart-clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://flipkart-clone12.netlify.app/", "_blank");
                }}
              />
               
            </Box>
            </Box>
            {/* buttons */}
            <Box>
                <Heading as={'h4'}>Flipkart <span>Clone</span> </Heading>
                <Box >
                  <Box textAlign={'left'} >
                  <Text><b>Features: </b>  Login/Logout, SignUp, Sort, Filter, cart and payment functionality has been implemented. .</Text>
                  <Text><b>Techstack:</b> HTML, CSS, Javascript, Carousel </Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built product pages and product detail pages.</li>
                    <li>Added sort And filter functionality and page linking.</li>
                    <li>Bulit Profile page </li>
                    </Text>
                  </Box>
                </Box>
                    
                <Text  m={'auto'} fontSize='2xl'><b>It is a collaborative project of five members completed in five days.</b></Text>
            </Box>
        </Box>

        <Box data-aos="flip-right">
        
            <Box>
            <img src={require("../utils/home1.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Spotify <span>Clone</span> </Heading>
            <Text  m={'auto'} fontSize='2xl' ><b> Spotify is a digital music service that gives you access to millions of songs.</b></Text>
        
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Spotify-clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://spotify-clone4me.netlify.app/", "_blank");
                }}
              />
              
            </Box>


            </Box>
            {/* buttons */}

            <Box>
                <Heading as={'h4'}>Spotify <span>Clone</span> </Heading>
                <Box >
                  <Box  textAlign={'left'} >
                  <Text><b>Features:  </b>  Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text>
                  <Text><b>Techstack: </b> React, Redux, Chakra-UI, Styled-Component, Framer-motion </Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
                    <li>Added filter functionality, page linking, and animations.</li>
                    
                    </Text>
                  </Box>
                  
                </Box>  
                <Text  m={'auto'} fontSize='2xl'><b>It is a collaborative project of four members completed in five days.</b></Text>   
            </Box>

            
        </Box>


          
        </Grid>
    </Box>
  )
}

export default Projects