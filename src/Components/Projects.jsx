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
        <Grid templateColumns='repeat(1, 1fr)' gap={6} className='grid-container' h={'65%'} >
        <Box>
          <Box>
            <img src={require("../utils/home1.png")} alt="spotify"  />
            <Box className='project-info'>
               <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
               <Text>Spotify is a digital music service that gives you access to millions of songs.</Text>
               <Text>It is a collaborative project of four members completed in five days.</Text>
               <Text><b>Features: </b> Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text>
               <Text><b>Techstack:</b> React, Redux, Chakra-UI, Styled-Component, Framer-motion</Text>
               <Text><b>Areas of Responsibility:</b> 
               
               <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
               <li>Added filter functionality, page linking, and animations.</li>
      
               </Text>
            </Box>
            </Box>
            {/* buttons */}
            <Box>
                <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Spotify-clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://spotify-clone4me.netlify.app/", "_blank");
                }}
              />
            </Box>
        </Box>


        <Box>
            <img src={require("../utils/Flipkart-clone.png")} alt="spotify"  />
            <Box className='project-info'>
               <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
               <Text>Spotify is a digital music service that gives you access to millions of songs.</Text>
               <Text>It is a collaborative project of four members completed in five days.</Text>
               <Text><b>Features: </b> Login/Logout, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text>
               <Text><b>Techstack:</b> React, Redux, Chakra-UI, Styled-Component, Framer-motion</Text>
               <Text><b>Areas of Responsibility:</b> 
               
               <li>Built a fully responsive Home page and Search page which closely resemble the user interface of Spotify.</li>
               <li>Added filter functionality, page linking, and animations.</li>
      
               </Text>
            </Box>
           
            {/* buttons */}
            <Box>
                <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<BsGithub />}
                onClick={() => {
                  window.open("https://github.com/Rutu-11/Spotify-clone", "_blank");
                }}
              />

              <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<AiOutlineEye />}
                onClick={() => {
                  window.open("https://spotify-clone4me.netlify.app/", "_blank");
                }}
              />
            </Box>
        </Box>

        <Box>
          <Box>
            <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0" alt=""  />
            <Box className='project-info'>
               <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
               <Text>Collaborative Project</Text>
               <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequuntur. </Text>
            </Box>
            </Box>
            <h1>ii</h1>
        </Box>

        <Box>
          <Box>
            <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0" alt=""  />
            <Box className='project-info'>
               <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
               <Text>Collaborative Project</Text>
               <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequuntur. </Text>
            </Box>
            </Box>
            <h1>ii</h1>
        </Box>

        <Box>
          <Box>
            <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0" alt=""  />
            <Box className='project-info'>
               <Heading as={'h2'}>Spotify <span>Clone</span> </Heading>
               <Text>Collaborative Project</Text>
               <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequuntur. </Text>
            </Box>
            </Box>
            <h1>ii</h1>
        </Box>

        </Grid>
    </Box>
  )
}

export default Projects