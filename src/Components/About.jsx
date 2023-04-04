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
              <span> Mithali Raj Scholarchip</span>, for exemplary performance at
             <span> Masai School.</span>  I'm a motivated and enthusiastic{" "}
              <span> Full Stack Web Developer</span> with a keen interest in
              discovering various industry-standard tech stacks and
              environments. I have a strong proficiency in the{" "}
              <span>MERN stack </span>
              and I'm eager to kickstart my career with an organization that
              offers room for improvement and growth, both for myself and
              towards achieving the company's objectives.
            </Text>
                {/* <br /> */}
            <Text>
              My love for coding began a year ago when I wrote my first
              <span> "Hello world"</span> program, which was a thrilling
              experience. Ever since then, I have been drawn towards creating
              websites that are not only visually appealing but also fully
              functional.
            </Text>

            
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
