import React, { useRef, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Container,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsDownload } from "react-icons/bs";
import { AiFillPhone, AiOutlineEye } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../utils/Rutuja_Dhekolkar_Resume.pdf";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { useForm, ValidationError } from '@formspree/react';

function Contact() {

  const [state, handleSubmit] = useForm("mayzpvgr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <Box className="contact" id="/contact" data-aos="zoom-in">
      <Heading as={"h1"} textAlign={"center"}>
        CONTACT <span>ME</span>
      </Heading>
      <Flex w={"100%"}  className="contact-section">
        <Box className="contact-icons">
          <Heading as={"h4"}>
            HIRE <span>ME</span>{" "}
          </Heading>

          <Box>
            <IconButton
              variant="outline"
              colorScheme="orange"
              aria-label="Send email"
              icon={<HiOutlineLocationMarker />}
            />
            <b>Belgaum, Karnataka</b>
          </Box>

          <Box>
            <a href="tel:+917996314566">
              <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<AiFillPhone />}
              />
            </a>
            <b>+91 7996314566</b>
          </Box>

          <Box>
            <a href="mailto:rutujadhekolkar97@gmail.com">
              <IconButton
                variant="outline"
                colorScheme="orange"
                aria-label="Send email"
                icon={<SiGmail />}
                BsGithub
              />
            </a>
            <b>rutujadhekolkar97@gmail</b>
          </Box>

          <Box>
            <IconButton
              variant="outline"
              colorScheme="orange"
              aria-label="Send email"
              icon={<GrLinkedin />}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/rutujadhekolkar/",
                  "_blank"
                );
              }}
            />

            <IconButton
              variant="outline"
              colorScheme="orange"
              aria-label="Send email"
              icon={<BsGithub />}
              onClick={() => {
                window.open("https://github.com/Rutu-11", "_blank");
              }}
            />
         
            <a href={resume}>
              <Button
                colorScheme="#fb641b"
                rightIcon={<AiOutlineEye color="white" className="icon" />}
                variant="solid"
                className="downloadBtn"
              >
                Resume
              </Button>
            </a>

            <a href={resume} download="Resume">
              <IconButton
                className="downloadBtn"
                colorScheme="#fb641b"
                aria-label="Send email"
                icon={<BsDownload className="icon" />}
              />
            </a>
          </Box>
        </Box>

        <Box className="contact-form">
          <Heading as={"h4"} textAlign={"center"}>
            GET IN <span>TOUCH</span>{" "}
          </Heading>
          <form action="https://formspree.io/f/mayzpvgr"  onSubmit={handleSubmit} method="POST"  >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
            id="name"
      
            name="name"
              type="text"
              focusBorderColor="orange.600"
              placeholder="Enter Name"
              required
              
            />
            <FormLabel>Email address</FormLabel>
            <Input
             id="email"
             type="email" 
             name="email"
              focusBorderColor="orange.600"
              placeholder="Enter Email"
              required
            />
            <FormLabel>Contact No.</FormLabel>
            <Input
           id="phone"
           
           name="phone"
              type="number"
              focusBorderColor="orange.600"
              placeholder="Enter Contact"
              required
            />
             <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <FormLabel>Message</FormLabel>
            <Textarea
           
           id="message"
        name="message"
              placeholder="Enter Your Message"
              focusBorderColor="orange.600"
              
            />
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            <Input
              mt={"20px"}
              className="send"
              type="submit"
              focusBorderColor="orange.600"
              value="Send"
              disabled={state.submitting}
            />
          </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
