import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function ItineraryCard({ title, location, date, time, description, onDelete }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="10px"
      marginBottom="10px"
      backgroundColor="gray.100"
    >
      <Text fontSize="xl" fontWeight="bold">{title}</Text>
      <Text>{location}</Text>
      <Text>{date} at {time}</Text>
      <Text>{description}</Text>
      <Button colorScheme="red" onClick={onDelete} marginTop="10px">
        Delete
      </Button>
    </Box>
  );
}

export default ItineraryCard;
