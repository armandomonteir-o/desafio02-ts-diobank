import { 
  ChakraProvider,
  Box
} from '@chakra-ui/react'
import { login } from './services/login';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Layout>
          <Card id={0} paragraph={''} details={''}></Card>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
