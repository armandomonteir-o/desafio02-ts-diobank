import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Image
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex 
      minWidth='max-content' 
      alignItems='center' 
      height='80px'
      paddingX={5}
      background="linear-gradient(50deg, rgba(67, 56, 202, 1) 0%, rgba(255, 255, 255, 1) 100%)"
      boxShadow="lg"  
    >

      <Box display='flex' alignItems='center'>
        <Image 
          src='/dio-logo.png' 
          boxSize='150px'
          objectFit='contain'
        />
      </Box>


      <Box flexGrow={1} textAlign='center'> 
        <Heading size='lg'>Dio Bank</Heading>
      </Box>

      <ButtonGroup gap={1}>
        <Button colorScheme='purple'>Login</Button>
        <Button colorScheme='purple'>Criar conta</Button>
      </ButtonGroup>
    </Flex>
  );
};
