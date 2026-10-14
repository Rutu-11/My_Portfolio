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
              Results-driven Software Engineer with 4+ years of experience building modern, scalable, and responsive applications using <span> React.js, Next.js, TypeScript, JavaScript and Node.js.</span> Adept at translating complex requirements into <span>intuitive UI, integrating RESTful and GraphQL APIs, and optimizing application performance.</span>
            </Text>
            <Text>At <span>Aditi Tech Consulting</span>, working on <span>PayPal production systems</span>, I contributed to <span>modernizing authentication and password recovery experiences</span>, developing scalable frontend flows, integrating backend services, and implementing production observability using <span>Datadog, FPTI, and CAL logs</span>.

            </Text>
            <Text>
              Previously at<span> GoMarble AI</span>, I led 0-to-1 development for five projects, owning the entire frontend lifecycle—from architecture to deployment. My work on API integration and responsive design helped deliver efficient and visually engaging applications. Earlier, at <span>Furation Tech Solution</span>, I optimized app performance and built a desktop platform with offline and cloud-sync capabilities.            </Text>
            <Text>
              Trained at <span>Masai School</span> as a Full Stack Developer, I built various projects including streaming apps and e-commerce platforms. My technical toolkit also includes <span>Figma, Shadcn, Echarts, MongoDB, and AWS</span>, along with strong skills in communication, problem-solving, and project management.
            </Text>
            <Text>
              Awarded the <span>Mithali Raj Scholarship</span> for excellence in software development, I combine a strong work ethic with a passion for innovation and continuous learning. My goal is to contribute to impactful products that blend performance with exceptional user experience.
            </Text>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
