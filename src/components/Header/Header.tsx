import {
  Box,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false, email: "" });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      height="80px"
      paddingX={5}
      background="linear-gradient(50deg, rgba(67, 56, 202, 1) 0%, rgba(255, 255, 255, 1) 100%)"
      boxShadow="lg"
    >
      <Box display="flex" alignItems="center">
        <Link to={"/"}>
          <Image src="/dio-logo.png" boxSize="150px" objectFit="contain" />
        </Link>
      </Box>

      <Box flexGrow={1} textAlign="center">
        <Heading size="lg">Dio Bank</Heading>
      </Box>

      <ButtonGroup gap={1}>
        {isLoggedIn !== true ? (
          <>
            <Button colorScheme="purple">Login</Button>
            <Button colorScheme="purple">Criar conta</Button>
          </>
        ) : (
          <Button colorScheme="purple" onClick={() => logout()}>
            Sair
          </Button>
        )}
      </ButtonGroup>
    </Flex>
  );
};
