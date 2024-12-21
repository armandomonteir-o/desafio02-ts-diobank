import { Flex } from "@chakra-ui/react";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
  children: any;
}

export const Card = ({ children }: ICard) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginTop="100px"
      marginBottom="100px"
    >
      {children}
    </Flex>
  );
};
