import { Box, Button, Divider, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "./Conta";
import { api } from "../api";

export const ContaInfo = () => {
  const [userData, setUserData] = useState<null | UserData>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data: any | UserData = await api;
        setUserData(data);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <VStack
      spacing={5}
      align="stretch"
      p={6}
      bg="gray.50"
      borderRadius="lg"
      boxShadow="lg"
      maxWidth="500px"
      margin="auto"
    >
      <Text
        fontSize={"3xl"}
        fontWeight={"bold"}
        color="purple.600"
        textAlign="center"
      >
        Informações da Conta
      </Text>

      <Divider borderColor="gray.200" />

      {userData ? (
        <VStack spacing={4} align="start" w="100%">
          <Text fontSize={"xl"} fontWeight="medium">
            Nome: <span style={{ fontWeight: "normal" }}>{userData.name}</span>
          </Text>
          <Text fontSize={"xl"} fontWeight="medium">
            E-mail:{" "}
            <span style={{ fontWeight: "normal" }}>{userData.email}</span>
          </Text>
          <Text fontSize={"xl"} fontWeight="medium">
            Saldo:{" "}
            <span style={{ fontWeight: "normal" }}>{userData.balance}</span>
          </Text>
        </VStack>
      ) : (
        <Text fontSize={"xl"} color="red.500" textAlign="center">
          Nenhum dado encontrado.
        </Text>
      )}

      <Divider borderColor="gray.200" />

      <Link to="/conta/:id">
        <Button colorScheme="purple" size="lg" w="full">
          Ir para a conta
        </Button>
      </Link>
    </VStack>
  );
};
