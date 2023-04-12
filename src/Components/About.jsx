import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function About() {
  return (
    <Box className="aboutMe" id="/about" >
      <Heading as="h1" className="heading" data-aos="zoom-in" >
        LET ME <span>INTRODUCE </span>MYSELF
      </Heading>

      <Flex className="about-section" data-aos="zoom-in" >
        <Box className="about-img">
          <img
            src="https://cdn.dribbble.com/users/2726/screenshots/2362705/angulardribbble.gif"
            alt=""
          />
        </Box>
        <Box className="about-info" data-aos="zoom-in">
          <List spacing={3}>
            <Text>
              Hii, My name is <span>Rutuja Dhekolkar</span>, an inagural
              beneficery of
              <span> Mithali Raj Scholarship</span>, for exemplary performance at
             <span> Masai School</span>.  As a motivated and enthusiastic <span> Full Stack Web Developer</span>, I am driven by a relentless curiosity to explore diverse industry-standard tech stacks and environments to create innovative solutions. My expertise lies in the <span>MERN stack</span>, and I am driven to embark on my career journey with an organization that fosters continuous improvement and growth, both for myself and in achieving the company's objectives.
            </Text>
                {/* <br /> */}
            <Text>
            My unwavering passion for coding ignited few years ago when I wrote my first <span>Hello world</span>  program, and the thrill of creating something from scratch has since captivated me. Since then, I have been dedicated to crafting visually appealing and <span> fully functional websites</span> that deliver exceptional user experiences.
            </Text>

            <Text>From <span>Front-end design</span>  to <span>Back-end development</span>, I am well-versed in creating robust and scalable web applications that meet the needs of modern businesses and users alike.</Text>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
