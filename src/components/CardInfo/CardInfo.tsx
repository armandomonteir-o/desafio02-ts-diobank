import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      backgroundColor={"white"}
      width={"320px"}
      minHeight={"120px"}
      padding={8}
      borderRadius={12}
    >
      <Text fontSize={"2xl"} fontWeight={500}>
        {mainContent}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};
