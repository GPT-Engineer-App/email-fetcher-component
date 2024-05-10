import React, { useState, useEffect } from "react";
import { Container, VStack, Box, Text, Input, Button, Spinner, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaSync } from "react-icons/fa";

// Mock data to simulate fetched emails
const mockEmails = [
  { id: 1, sender: "john.doe@example.com", subject: "Meeting Update", body: "Meeting is rescheduled to 3 PM.", date: "2023-01-01" },
  { id: 2, sender: "jane.smith@example.com", subject: "Project Proposal", body: "Please find the attached project proposal.", date: "2023-01-02" },
];

const Index = () => {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    setLoading(true);
    setError("");
    try {
      // Simulate API call
      setTimeout(() => {
        setEmails(mockEmails);
        setFilteredEmails(mockEmails);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Failed to fetch emails");
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to fetch emails.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = emails.filter((email) => email.sender.includes(value) || email.subject.includes(value));
    setFilteredEmails(filtered);
  };

  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={4} align="stretch">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Input placeholder="Search by sender or subject" value={searchTerm} onChange={handleSearch} />
          <Button onClick={fetchEmails} leftIcon={<FaSync />} colorScheme="teal" ml={2}>
            Refresh
          </Button>
        </Box>
        {loading ? (
          <Spinner size="xl" />
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : (
          filteredEmails.map((email) => (
            <Box p={5} shadow="md" borderWidth="1px" key={email.id}>
              <Text fontWeight="bold">
                <FaEnvelope /> {email.sender}
              </Text>
              <Text mt={2}>{email.subject}</Text>
              <Text mt={2} noOfLines={1}>
                {email.body}
              </Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
