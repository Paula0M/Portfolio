import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      spacing={4}
      align="flex-start"
      p={4}
      bg="white"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      transition="transform 0.2s"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="flex-start" spacing={2}>
        <Heading size="md" color="gray.700">
          {title}
        </Heading>
        <Text color="gray.500">
          {description}
        </Text>
      </VStack>
      <HStack spacing={2} color="teal.500">
        <Text fontWeight="bold">Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
