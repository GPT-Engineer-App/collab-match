import { Container, Text, VStack, Box, Heading, IconButton, Image, HStack, Input, Button, Textarea } from "@chakra-ui/react";
import { FaSearch, FaUser, FaEnvelope, FaFilter, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Startup Connect
          </Heading>
          <Text fontSize="lg" color="gray.600">
            A unique and innovative platform designed to connect startup founders, co-founders, and investors.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Key Features and Functionalities
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Category-wise Search
              </Heading>
              <Text>Users can search for co-founders and investors by category, helping them find the right match according to their specific requirements.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Profile Creation
              </Heading>
              <Text>Every user, whether a startup founder, co-founder, or investor, can create a detailed profile including their skills, experience, and interests.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Intuitive Interface for Startups
              </Heading>
              <Text>An intuitive interface for startups to create detailed profiles, specify their goals and requirements, and attract relevant co-founders and investors.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Advanced Search and Filters for Investors
              </Heading>
              <Text>Investors can search and filter startups according to their preferences and investment criteria, helping them find suitable opportunities.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Secure Messaging System
              </Heading>
              <Text>A secure messaging system allows users to communicate, clear queries, and discuss potential collaborations.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Dedicated Support System
              </Heading>
              <Text>A dedicated support system helps startups at every step of their growth journey, providing guidance for funding, business strategy, and overcoming operational challenges.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Platform Benefits
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Enhanced Connectivity
              </Heading>
              <Text>Bringing startups, co-founders, and investors on a centralized platform to enhance connectivity among them.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Personalized Matches
              </Heading>
              <Text>Detailed profiles and advanced search filters help users find the best possible matches for their specific needs.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Efficient Communication
              </Heading>
              <Text>Ensures seamless communication through a secure messaging system, making it easier to form collaborations and partnerships.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Comprehensive Support
              </Heading>
              <Text>A dedicated support system helps startups efficiently handle various business challenges.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Get Started
          </Heading>
          <VStack spacing={4} align="stretch">
            <HStack>
              <Input placeholder="Search for co-founders or investors" />
              <IconButton aria-label="Search" icon={<FaSearch />} />
            </HStack>
            <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
              Create Profile
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid">
              Contact Support
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
