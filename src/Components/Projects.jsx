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
            <img src={require("../utils/youtube-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Youtube <span>Clone</span> </Heading> <br />
            <Text  m={'auto'} fontSize='2xl' ><b> It is a global online video-sharing and social media platform.</b></Text> <br />
        
            <Text  m={'auto'} fontSize='l'><b>Individual Project</b> </Text>   
            <Text> <b>Duration :</b> 15 Days</Text>
          
              
            </Box>


            </Box>
           

            <Box>
            <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/You-Tube-Clone", "_blank");
                }}
              />

              <Heading as={'h4'}>Youtube <span>Clone</span> </Heading>

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://my-you-tube-clone-1.web.app/", "_blank");
                }}
              />
              </Flex>
                
                <Box >
                  <Box  textAlign={'left'} >
                 
                  <Text><b>Techstack: </b> React | Redux | Firebase | YoutubeAPI | Chakra UI | Sass</Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Features:</b> <br/>
               
                    <li>Search for videos</li>
                    <li>Filter search results by relevance, view count, and rating</li>
                    <li>Infinite scroll to load more videos</li>
                    <li>Private routes for authenticated users</li>
                    <li>View channel details, including videos and subscriber count</li>
                    <li>Leave comments on videos</li>
                    <li>Display related videos based on the current video being viewed</li>
                    
                    </Text>
                  </Box>
                  
                </Box>  
                
            </Box>

            
        </div>

        <div data-aos="zoom-in">
            <Box>
            <img src={require("../utils/home1.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Spotify <span>Clone</span> </Heading> <br />
            <Text  m={'auto'} fontSize='2xl' ><b> Spotify is a digital music service that gives you access to millions of songs.</b></Text>
              <br/>
            <Text  m={'auto'} fontSize='l'><b>Group Project :</b> 4 Collaborators </Text>   
            <Text> <b>Duration :</b> 05 Days</Text>
           
            </Box>


            </Box>
            {/* buttons */}

            <Box >
            <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
                    
                    <IconButton
                        variant="outline"
                        colorScheme="white"
                        aria-label="Send email"
                        borderRadius={'2px'}
          
                        icon={<BsGithub />}
                        
                        onClick={() => {
                          window.open("https://github.com/Rutu-11/Spotify-clone", "_blank");
                        }}
                      />
                        <Heading as={'h4'}>Spotify <span>Clone</span> </Heading>
                      <IconButton
                        variant="outline"
                        colorScheme="white"
                        aria-label="Send email"
                        icon={<AiOutlineEye />}
                        onClick={() => {
                          window.open("https://spotify-clone-1s.netlify.app/", "_blank");
                        }}
                      />
              </Flex>
                
                <Box >
                  <Box  textAlign={'left'} >
                  <Text><b>Features:  </b>  Login/Logout, Oauth, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text>
                  <Text><b>Techstack: </b> React, Redux, Chakra-UI, Styled-Component, Framer-motion, Node Js, Express, Mongo DB, Mongoose </Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
                    <li>Added filter functionality, page linking, and animations.</li>
                    <li>Architected a powerful backend system for efficient data management</li>
                    </Text>
                  </Box>
                 
               
                
                  </Box>  
            </Box>

            
        </div>




{/* ! ***************************************************** */}

        <div data-aos="zoom-in">
        
        <Box>
        <img src={require("../utils/Portfolio.png")} alt="spotify"  />
        <Box className='project-info'>
        <Heading as={'h4'}>Port<span>folio</span> </Heading> <br />
        <Text  m={'auto'} fontSize={'30px'} ><b> This is my fully responsive portfolio which I recently made using React & Chakra UI.</b></Text> <br />

        <Text  m={'auto'} fontSize='l'><b>Individual Project</b> </Text>   
            <Text> <b>Duration :</b> 04 Days</Text>       
        
        </Box>


        </Box>
    

        <Box>
        <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
              
        <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<BsGithub />}
            onClick={() => {
              window.open("https://github.com/Rutu-11/My_Portfolio", "_blank");
            }}
          />

          <Heading as={'h4'}>Portfolio <span>Website</span> </Heading>

          <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<AiOutlineEye />}
            onClick={() => {
              window.open("https://rutu-11.github.io/My_Portfolio/", "_blank");
            }}
          />
          
              </Flex>
            
            <Box >
              <Box  textAlign={'left'} >

              <Text><b>Techstack: </b> React | Redux | Chakra-UI | Framer-motion |</Text>
              </Box>

              <Box  textAlign={'left'}>
              <Text><b>Features:</b> <br/>
           
                <li>It is Fully Responsive</li>
                <li>Added Scrolling functionality </li>
                <li> added Animations on page load.</li>
                <li>Used <i> email formspree </i> for contact page</li> <br />
               
                
                </Text>
              </Box>
              
            </Box>  
           
        </Box>

        
    </div>


    <div data-aos="zoom-in">
          <Box>
            <img src={require("../utils/Flipkart-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Flipkart <span>Clone</span> </Heading> <br />
            <Text m={'auto'} fontSize='2xl' ><b> Flipkart is one of India’s leading e-commerce marketplaces.</b></Text> <br />
            <Text  m={'auto'} fontSize='l'><b>Group Project :</b> 6 Collaborators </Text>   
            <Text> <b>Duration :</b> 05 Days</Text>
            
            </Box>
            </Box>
            {/* buttons */}
            <Box>
            <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
            <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Flipkart-clone", "_blank");
                }}
              />

                <Heading as={'h4'}>Flipkart <span>Clone</span> </Heading>

              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://flipkart-clone12.netlify.app/", "_blank");
                }}
                />
            </Flex>
                
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
                    
               
            </Box>
        </div>

        {/* <div data-aos="zoom-in">
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

            
        </div> */}
          
        </Grid>
    </Box>
  )
}

export default Projects