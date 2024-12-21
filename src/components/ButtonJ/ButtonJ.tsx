import { Center, Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton {
  onClick: MouseEventHandler;
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const ButtonJ = ({
  onClick,
  text = "Login",
  isLoading = false,
  disabled = false,
}: IButton) => {
  return (
    <Center marginTop="20px">
      <Button
        onClick={onClick}
        colorScheme="purple"
        size="lg"
        width="100%"
        borderRadius="full"
        paddingY="12px"
        _hover={{ bg: "purple.600" }}
        isLoading={isLoading}
        disabled={disabled}
      >
        {text}
      </Button>
    </Center>
  );
};
