import React from 'react'
import {Box, Flex, Heading,Grid, GridItem, Text, Button , IconButton} from '@chakra-ui/react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';

function Projects() {
  return (
    <Box className='projects-container'>
        <Heading as={'h1'}>
            Latest <span>Projects</span>
        </Heading>
        <Grid templateColumns='repeat(1, 1fr)' gap={6} className='grid-container'  >
        <Box>
            <Box>
            <img src={require("../utils/home1.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
            <Text w="50%" m={'auto'} fontSize='2xl' ><b> Spotify is a digital music service that gives you access to millions of songs.</b></Text>
        
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
               <Text w="50%" m={'auto'} fontSize='2xl'><b>It is a collaborative project of four members completed in five days.</b></Text>
            </Box>


            </Box>
            {/* buttons */}

            <Box>
                <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
                <Flex >
                  <Box w="50%" textAlign={'left'} marginRight={'30px'}>
                  <Text><b>Features: </b> <br/> <li>Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</li></Text>
                  <Text><b>Techstack:</b> <br/><li>React, Redux, Chakra-UI, Styled-Component, Framer-motion </li></Text>
                  </Box>

                  <Box  w="50%" textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
                    <li>Added filter functionality, page linking, and animations.</li>
                    </Text>
                  </Box>
                </Flex>     
            </Box>

            
        </Box>
        <Box>
          <Box>
            <img src={require("../utils/Flipkart-clone.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
            <Text w="50%" m={'auto'} fontSize='2xl' ><b> Spotify is a digital music service that gives you access to millions of songs.</b></Text>
        
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
               <Text w="50%" m={'auto'} fontSize='2xl'><b>It is a collaborative project of four members completed in five days.</b></Text>
            </Box>
            </Box>
            {/* buttons */}
            <Box>
                <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
                <Flex >
                  <Box w="50%" textAlign={'left'} marginRight={'30px'}>
                  <Text><b>Features: </b> <br/> <li>Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</li></Text>
                  <Text><b>Techstack:</b> <br/><li>React, Redux, Chakra-UI, Styled-Component, Framer-motion </li></Text>
                  </Box>

                  <Box  w="50%" textAlign={'left'}>
                  <Text><b>Areas of Responsibility:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
                    <li>Added filter functionality, page linking, and animations.</li>
                    </Text>
                  </Box>
                </Flex>     
            </Box>
        </Box>

        </Grid>
    </Box>
  )
}

export default Projects