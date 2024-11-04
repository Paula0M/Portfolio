import React from "react";
import { Avatar, Heading, Img, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Paula!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarUrl = "https://i.pravatar.cc/150?img=7";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
     <VStack spacing={4} align="center">
        {/* avatar */}
        <Img
          borderRadius="full"
          boxSize="150px"
          src={avatarUrl}
          alt="Avatar"
        />
        {/* greeting */}
        <Heading as="h2" size="lg" color="white">
          {greeting}
        </Heading>
        {/* Descripción */}
        <Text fontSize="2xl" color="white">
          {bio1}
        </Text>
        <Text fontSize="md" color="gray.300">
          {bio2}
        </Text>
      </VStack>

  </FullScreenSection>
);

export default LandingSection;
