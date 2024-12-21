import { Center, SimpleGrid, Spinner, Button } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CardInfo } from "../components/CardInfo/CardInfo";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

export interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();

  const { isLoggedIn } = useContext(AppContext);

  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={"xl"} color="purple" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
            <Link to="/infoconta">
              <Button colorScheme="purple.100">
                Ir para detalhes da conta
              </Button>{" "}
            </Link>
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
