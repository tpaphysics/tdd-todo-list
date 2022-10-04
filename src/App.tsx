import { Flex } from '@chakra-ui/react';
import AddTaskForm from './Components/AddTaskForm';
import Cards from './Components/Cards';
import ListProvider from './global/useList/provider/ListProvider';

function App() {
  return (
    <ListProvider>
      <Flex
        flexDir='column'
        gap='8px'
        bg='gray.900'
        w='100%'
        maxW='calc(1.6180*200px + 32px)'
        borderRadius='5px'
        m='0 auto'
        p='16px'
        justifyContent='center'
        mt='80px'
      >
        <AddTaskForm />
        <Cards />
      </Flex>
    </ListProvider>
  );
}

export default App;
