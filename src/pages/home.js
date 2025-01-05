import React, { useState } from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Chat from "../components/Chat";
import ItineraryCard from "../components/ItineraryCard"; // 일정 카드 컴포넌트
import { Box, Grid, Button, Input } from "@chakra-ui/react";

const Home = () => {
  const [coordinates] = useState([41.8781, -87.6298]);
  const [itinerary, setItinerary] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  // 일정 추가 함수
  const handleAddCard = () => {
    const newCard = { title, location, date, time, description };
    setItinerary([...itinerary, newCard]);
    // 입력 필드 초기화
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setDescription("");
  };

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

      {/* 일정 입력 필드 */}
      <Box padding="20px" borderWidth="1px" borderRadius="lg" marginBottom="20px">
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Add Itinerary</h2>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          marginBottom="10px"
        />
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          marginBottom="10px"
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          marginBottom="10px"
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          marginBottom="10px"
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          marginBottom="20px"
        />
        <Button colorScheme="teal" onClick={handleAddCard}>
          Add Itinerary
        </Button>
      </Box>

      {/* 일정 카드 표시 */}
      <Box padding="20px">
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>My Itinerary</h2>
        {itinerary.map((item, index) => (
          <ItineraryCard
            key={index}
            title={item.title}
            location={item.location}
            date={item.date}
            time={item.time}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
