import React, { useEffect } from 'react'
import AOS from 'aos'
import {Box, Flex, Heading,Grid, GridItem, Text, Button , IconButton} from '@chakra-ui/react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import VanillaTilt from 'vanilla-tilt';

function Projects() {
 
  return (
    <Box className='projects-container' id='/projects'>
        <Heading as={'h1'} data-aos="zoom-in">
            LATEST <span>PROJECTS</span>
        </Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(2, 1fr)']} gap={6} className='grid-container'  >
        <div data-aos="zoom-in">
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

            
        </div>

        <div data-aos="zoom-in">
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
        </div>

        <div data-aos="zoom-in">
        
            <Box>
            <img src={require("../utils/youtube-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Youtube <span>Clone</span> </Heading>
            <Text  m={'auto'} fontSize='2xl' ><b> It is a global online video-sharing and social media platform.</b></Text>
        
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/You-Tube-Clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://rutu-11.github.io/You-Tube-Clone/", "_blank");
                }}
              />
              
            </Box>


            </Box>
            {/* buttons */}

            <Box>
                <Heading as={'h4'}>Youtube <span>Clone</span> </Heading>
                <Box >
                  <Box  textAlign={'left'} >
                  {/* <Text><b>Features:  </b>  Search, Filter, Infinite Scroll, Private Routes,Channel Details, Comments, Related Videos</Text> */}
                  <Text><b>Techstack: </b> React | Redux | Firebase Auth | YoutubeAPI | Chakra UI | Sass</Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Features:</b> <br/>
               
                    <li>Search for videos</li>
                    <li>Filter search results by relevance, upload date, view count, and rating</li>
                    <li>Infinite scroll to load more videos</li>
                    <li>Private routes for authenticated users</li>
                    <li>View channel details, including videos and subscriber count</li>
                    <li>Leave comments on videos</li>
                    <li>Display related videos based on the current video being viewed</li>
                    
                    </Text>
                  </Box>
                  
                </Box>  
                <Text  m={'auto'} fontSize='2xl'><b>It is a individual project still in progress.</b></Text>   
            </Box>

            
        </div>

        <div data-aos="zoom-in">
        
        <Box>
        <img src={require("../utils/Portfolio.png")} alt="spotify"  />
        <Box className='project-info'>
        <Heading as={'h4'}>Port<span>folio</span> </Heading>
        <Text  m={'auto'} fontSize='2xl' ><b> This is my fully responsive portfolio which I recently made using React & Chakra UI.</b></Text>
    
        <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<BsGithub />}
            onClick={() => {
              window.open("https://github.com/Rutu-11/My_Portfolio", "_blank");
            }}
          />

          <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<AiOutlineEye />}
            onClick={() => {
              window.open("https://rutu-11.github.io/My_Portfolio/", "_blank");
            }}
          />
          
        </Box>


        </Box>
        {/* buttons */}

        <Box>
            <Heading as={'h4'}>Portfolio <span>Website</span> </Heading>
            <Box >
              <Box  textAlign={'left'} >
              {/* <Text><b>Features:  </b>  Search, Filter, Infinite Scroll, Private Routes,Channel Details, Comments, Related Videos</Text> */}
              <Text><b>Techstack: </b> React | Redux | Chakra-UI | Framer-motion |</Text>
              </Box>

              <Box  textAlign={'left'}>
              <Text><b>Features:</b> <br/>
           
                <li>It is Fully Responsive</li>
                <li>Added Scrolling functionality </li>
                <li> added Animations on page load.</li>
                <li>Used <i> email formspree </i> for contact page</li> <br />
                {/* <li>View channel details, including videos and subscriber count</li>
                <li>Leave comments on videos</li>
                <li>Display related videos based on the current video being viewed</li> */}
                
                </Text>
              </Box>
              
            </Box>  
            <Text  m={'auto'} fontSize='2xl'><b>It is a individual project completed in 4 days.</b></Text>   
        </Box>

        
    </div>

        <div data-aos="zoom-in">
            <Box>
            <img src={require("../utils/blumercury-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Bluemercury <span>Clone</span> </Heading>
            <Text  m={'auto'} fontSize='2xl' ><b> Bluemercury is a leading luxury beauty retailer offering the best cosmetics and skincare.</b></Text>
        
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/BlueMercury-Clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://blumercury-clone-c4.netlify.app/", "_blank");
                }}
              />
              
            </Box>


            </Box>
            {/* buttons */}

            <Box >
                <Heading as={'h4'}>Bluemercury <span>Clone</span> </Heading>
                <Box >
                  <Box  textAlign={'left'} >
                  <Text><b>Features:  </b>  Login/Logout, SignUp, Sort, Filter, cart and payment.</Text>
                  <Text><b>Techstack: </b> HTML, CSS, JavaScript </Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li> Built shop which consists of different category section </li>
                    <li>Added filter and sort functionality.</li>
                    <li>Built Routine Reboot page</li>
                    
                    </Text>
                  </Box>
                  
                </Box>  
                <Text  m={'auto'} fontSize='2xl'><b>It is a collaborative project of six members completed in five days.</b></Text>   
            </Box>

            
        </div>
          
        </Grid>
    </Box>
  )
}

export default Projects