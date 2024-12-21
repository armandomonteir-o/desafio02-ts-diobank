import { Box, Center, Stack, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ButtonJ } from "../components/ButtonJ/ButtonJ";
import { Card } from "../components/Card/Card";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loginResult = await login(email, password);

    if (loginResult === "incorrectEmail") {
      return alert("E-mail incorreto");
    }

    if (loginResult === "incorrectPassword") {
      return alert("Senha incorreta");
    }

    if (loginResult === "success") {
      setIsLoggedIn(true);
      changeLocalStorage({ login: true, email });
      navigate("/conta/:id");
    }
  };

  return (
    <Card id={0} paragraph={""} details={""}>
      <Box
        backgroundColor="white"
        borderRadius="xl"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        width={{ base: "90%", sm: "400px" }}
        padding="30px"
        transition="all 0.3s ease-in-out"
        _hover={{
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          transform: "scale(1.05)",
        }}
      >
        {/* renderização condicional 
        { (userData === null || userData === undefined) ?
          <h1>Loading...</h1> :
          <h1>Informações carregadas</h1>
        } */}

        <Center marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            Faça o login
            <br />
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            size="lg"
            focusBorderColor="purple.500"
            borderColor="gray.300"
            _hover={{ borderColor: "purple.400" }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Stack>

        <ButtonJ onClick={() => validateUser(email, password)} />
      </Box>
    </Card>
  );
};

export default Home;
