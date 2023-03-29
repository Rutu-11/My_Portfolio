import React from 'react'
import { Flex, Spacer, Heading, Button ,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <Flex justify={'space-between'} alignItems='center' className='navbar' >
        <Heading as='h1' size='xl' noOfLines={1} className='heading' >Rutuja Dhekolkar</Heading>
        <Spacer/>
        <Flex className='innerNavDiv' >
        <Box><Link to='/'className='link'  >Home</Link></Box>

       <Box><Link to='' className='link'>About</Link></Box>

       <Box><Link to='' className='link'>Skills</Link></Box>

       <Box><Link to='' className='link'>Projects</Link></Box>
       <Box><Link to='' className='link'>Contact</Link></Box>
        </Flex>
    </Flex>
  )
}

export default Navbar