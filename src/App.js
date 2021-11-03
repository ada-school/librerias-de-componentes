import { Container } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import {
  Button,
  ButtonGroup,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Flex height='100vh' justifyContent='center' alignItems='center'>
      <Box maxW='xs' bg={backgroundColor} p={6} borderRadius='md'>
        <Heading size='lg' mb={3}>
          Log In
        </Heading>
        <Input
          placeholder='User'
          variant='filled'
          mb={3}
          type='text'
          autoComplete='off'
        />
        <Input
          placeholder='Password'
          variant='filled'
          mb={6}
          type='password'
          autoComplete='off'
        />
        <HStack spacing='10' variant='outline' justify='center'>
          <Button colorScheme='blue'>Login</Button>
          <Button colorScheme='blue' onClick={toggleColorMode}>
            Dark Mode
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default App;
