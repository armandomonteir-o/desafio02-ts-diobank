import {
  ChakraProvider,
  Box,
  Center,
  Input,
  Button,
  Flex,
  Text,
  Stack,
  useBreakpointValue
} from "@chakra-ui/react"

import { login } from "../services/login"

interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginTop="100px"
      marginBottom="100px"
    >
      <Box
        backgroundColor="white"
        borderRadius="xl"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        width={{ base: "90%", sm: "400px" }}
        padding="30px"
        transition="all 0.3s ease-in-out"
        _hover={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          transform: "scale(1.05)"
        }}
      >
        <Center marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            Faça o login
          </Text>
        </Center>

        <Stack spacing={4}>
          <Input
            placeholder="E-mail"
            type="email"
            size="lg"
            focusBorderColor="purple.500"
            borderColor="gray.300"
            _hover={{ borderColor: "purple.400" }}
          />
          <Input
            placeholder="Senha"
            type="password"
            size="lg"
            focusBorderColor="purple.500"
            borderColor="gray.300"
            _hover={{ borderColor: "purple.400" }}
          />
        </Stack>

        <Center marginTop="20px">
          <Button
            onClick={login}
            colorScheme="purple"
            size="lg"
            width="100%"
            borderRadius="full"
            paddingY="12px"
            _hover={{ bg: "purple.600" }}
          >
            Login
          </Button>
        </Center>
      </Box>
    </Flex>
  )
}
