import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  Avatar,
  Heading,
} from "@chakra-ui/react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: "You" };
      setMessages((prev) => [...prev, newMessage]);

      // Simulate a bot reply
      const botReply = { text: "Thanks for your message! How can I help?", sender: "Bot" };
      setTimeout(() => {
        setMessages((prev) => [...prev, botReply]);
      }, 1000);

      setInput("");
    }
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt={6}
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Header */}
      <Box bg="blue.500" py={3} textAlign="center">
        <Heading size="md" color="white">
          Support ChatBot
        </Heading>
      </Box>

      {/* Chat Messages */}
      <VStack
        spacing={3}
        px={4}
        py={2}
        bg="blue.50"
        height="300px"
        overflowY="scroll"
        align="stretch"
      >
        {messages.map((msg, index) => (
          <HStack
            key={index}
            justify={msg.sender === "You" ? "flex-end" : "flex-start"}
            align="center"
            spacing={3}
          >
            {msg.sender === "Bot" && (
              <Avatar name="Bot" bg="blue.500" color="white" size="sm" />
            )}
            <Box
              bg={msg.sender === "You" ? "blue.500" : "gray.100"}
              color={msg.sender === "You" ? "white" : "black"}
              px={4}
              py={2}
              borderRadius="md"
              maxW="70%"
              textAlign="left"
              wordBreak="break-word" /* Prevents text overflow */
              whiteSpace="normal"   /* Ensures proper line wrapping */
            >
              <Text fontWeight="bold" fontSize="xs">
                {msg.sender}
              </Text>
              <Text fontSize="sm">{msg.text}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      {/* Input Box */}
      <Flex p={3} bg="white" borderTop="1px solid" borderColor="gray.200" align="center">
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          flex="1"
          mr={2}
          borderRadius="full"
        />
        <Button
          colorScheme="blue"
          borderRadius="full"
          onClick={sendMessage}
        >
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default Chat;
