import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const ItineraryView = ({ data, onSelectDay }) => {
  if (!data || !data.itinerary) {
    return <Text>No itinerary data available.</Text>;
  }

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Destination: {data.destination}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={6}>
        Trip Duration: {data.trip_duration} days
      </Text>

      {data.itinerary.map((dayItem) => (
        <Box key={dayItem.day} mb={8} p={4} borderWidth="1px" borderRadius="md" bg="white">
          <Heading as="h3" size="md" mb={4}>
            Day {dayItem.day}
          </Heading>
          {dayItem.schedule.map((loc, idx) => (
            <Text key={idx}>
              <strong>{loc.location_name}</strong>: {loc.description}
            </Text>
          ))}

          <Button mt={4} colorScheme="blue" onClick={() => onSelectDay(dayItem.day)}>
            Show on Map
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ItineraryView;
