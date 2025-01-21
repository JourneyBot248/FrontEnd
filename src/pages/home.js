import React, { useState } from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Chat from "../components/Chat";
import ItineraryView from "../components/ItineraryView";
import {
  Box,
  Grid,
  Button,
  Collapse,
  Avatar,
} from "@chakra-ui/react";
import itineraryData from "../japan_itinerary.json";
import logo from "../image/icon.png";

const Home = () => {
  const [coordinates, setCoordinates] = useState([35.6895, 139.6917]); // Default Tokyo just for now test purpose
  const [showChat, setShowChat] = useState(false);
  const [selectedPath, setSelectedPath] = useState([]);  

  const handleSelectDay = (dayIndex) => {
    const selectedDay = itineraryData.itinerary.find(day => day.day === dayIndex);
    if (selectedDay && selectedDay.schedule.length > 0) {
      setSelectedPath(selectedDay.schedule);
      setCoordinates([selectedDay.schedule[0].latitude, selectedDay.schedule[0].longitude]);
    } else {
      setSelectedPath([]);
      setCoordinates([35.6895, 139.6917]); 
    }
  };

  return (
    <Box width="100%" height="100vh" position="relative">
      <Box position="sticky" top="0" zIndex="1500" bg="white" boxShadow="md">
        <Header />
      </Box>

      <Grid templateColumns="400px 1fr" height="calc(100vh - 60px)">
        {/* lef side bar.! */}
        <Box 
          padding="20px" 
          backgroundColor="#F5F5F5" 
          overflowY="auto" 
          height="100%"
        >
          <ItineraryView data={itineraryData} onSelectDay={handleSelectDay} />
        </Box>

        {/* right map..!>? */}
        <Box position="relative" width="100%" height="100%" minHeight="600px">
          <Map coordinates={coordinates} path={selectedPath} />
        </Box>
      </Grid>

      {/* just letting me know that this is  floating chat button & chatBox */}
      <Box position="fixed" bottom="30px" right="30px" zIndex="2000">
        <Button
          onClick={() => setShowChat(!showChat)}
          borderRadius="full"
          variant="unstyled"
          p={0}
          w="56px"
          h="56px"
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          boxShadow="lg"
          aria-label="Open Chat"
        >
          <Avatar name="Support" src={logo} fallbackSrc="https://via.placeholder.com/150" />
        </Button>

        <Collapse in={showChat} animateOpacity>
          <Box
            mt={2}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            boxShadow="lg"
            p={4}
            width="350px"
            maxHeight="80vh"
            position="fixed"
            bottom="90px"
            right="30px"
            overflow="auto"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            zIndex="2000"
          >
            <Chat onBack={() => setShowChat(false)} />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Home;
