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
                    Good communication and teamwork skills, able to work effectively with others in a collaborative environment. Proficient in HTML, CSS, and JavaScript
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Strong ability to learn and adapt to new technologies quickly
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Seeking new challenges to push limits and further develop skills
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Knowledge of database design and management
                </ListItem>

                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Comfortable working in both front-end and back-end development environments
                </ListItem>

                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Strong attention to detail and ability to write clean, efficient code
                </ListItem>

                <ListItem>
                    <ListIcon as={MdCheckCircle} color='#fb641b' />
                    Passionate about staying up-to-date with the latest web development trends and best practices
                </ListItem>

        </List>
            </Box>
        </Flex>
    </Box>
  )
}

export default About
