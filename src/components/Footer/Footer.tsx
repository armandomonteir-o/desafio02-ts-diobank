import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="footer"
      direction={isMobile ? "column" : "row"}
      justify="space-between"
      align="center"
      height="80px"
      paddingX={5}
      paddingY={3}
      background="linear-gradient(50deg, rgba(67, 56, 202, 1) 0%, rgba(255, 255, 255, 1) 100%)"
      boxShadow="lg"
      color="white"
    >
      <Box>
        <Text fontSize="sm">
          © 2024 DIO BANK. Todos os direitos reservados.
        </Text>
      </Box>

      <Spacer />

      <Box>
        <Link href="/sobre" color="purple" fontSize="sm" marginRight={4}>
          Sobre nós
        </Link>
        <Link href="/contato" color="purple" fontSize="sm" marginRight={4}>
          Contato
        </Link>
        <Link href="/privacidade" color="purple" fontSize="sm">
          Política de Privacidade
        </Link>
      </Box>
    </Flex>
  );
};
