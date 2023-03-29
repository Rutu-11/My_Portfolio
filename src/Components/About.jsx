import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import {MdCheckCircle, MdSettings} from 'react-icons/md'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
function About() {
  return (
    <Box className='aboutMe'>
       <Heading as="h1" className="heading">
          About <span>Me</span>
        </Heading>

        <Flex className='about-section'>
            <Box className='about-img'>
                <img src="https://cdn.dribbble.com/users/17707/screenshots/2413754/rrr.gif" alt="" />
            </Box >
            <Box className='about-info'>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon as={MdSettings} color='#fb641b' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
        </List>
            </Box>
        </Flex>
    </Box>
  )
}

export default About
