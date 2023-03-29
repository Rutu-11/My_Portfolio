import React from 'react'
import { Flex, Spacer, Heading, Button ,Box, Text, IconButton} from '@chakra-ui/react';
import {GrLinkedin} from 'react-icons/gr'
import {SiGmail} from 'react-icons/si'
import {BsGithub, BsDownload} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
  return (
    <Flex className='home'>
      <Box className='home-content'>
        <Heading as='h3'className='heading' >Hello, It's Me</Heading>
        <Heading as='h1'className='heading' >Rutuja Dhekolkar</Heading>
        <Heading as='h3'className='heading' >I am a <span className='text' >Full Stack Web Developer</span> </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, est fugiat facere itaque sit, nobis eius quae, architecto rerum atque eveniet in beatae fugit voluptatibus aperiam reprehenderit voluptate deleniti numquam?
        Numquam, quis rem iusto neque impedit magni, nisi optio hic fuga natus molestias quia. Sapiente recusandae suscipit saepe, aliquam temporibus nemo vel a ullam sint quidem voluptatum doloremque praesentium excepturi.</Text>
    
      <Box className='social-media'> 
         <IconButton
        variant='outline'
        colorScheme='orange'
        aria-label='Send email'
        icon={<GrLinkedin/>}
        onClick={()=>{
            window.open('https://www.linkedin.com/in/rutujadhekolkar/', '_blank');
           }}
        />
         <IconButton
        variant='outline'
        colorScheme='orange'
        aria-label='Send email'
        icon={<BsGithub/>}
        onClick={()=>{
            window.open('https://github.com/Rutu-11', '_blank');
           }}
        />
         <IconButton
        variant='outline'
        colorScheme='orange'
        aria-label='Send email'
        icon={<AiFillPhone/>}
        onClick={()=>{
            window.open('https://www.google.com', '_blank');
           }}
        />
          
      <IconButton 
        variant='outline'
        colorScheme='orange'
        aria-label='Send email'
        icon={<SiGmail />}
       onClick={()=>{
        window.open('https://www.google.com', '_blank');
       }}
        />
      </Box>
     <Button rightIcon={<BsDownload  />} colorScheme='orange' variant='solid' className='downloadBtn' >
        Download CV
    </Button>
     </Box>

     <Flex className='home-image'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0" alt="" />
     </Flex>
    </Flex>
  )
}

export default Home
