import React, { useState } from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Chat from "../components/Chat"; // Correct import for Chat component
import { Box, Grid } from "@chakra-ui/react"; // Correct import for Grid

const Home = () => {
  const [coordinates] = useState([41.8781, -87.6298]);

  return (
    <Box>
      <Header />
      <Grid templateColumns="2fr 1fr" gap={4} padding="20px">
        <Box>
          <h1 style={{ textAlign: "center" }}>Chicago</h1>
          <div style={{ marginBottom: "20px" }}>
            <Map coordinates={coordinates} />
          </div>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" padding="10px">
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Chat System</h2>
          <Chat />
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
