import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { BsListOl } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import AddTaskForm from './Components/AddTaskForm';
import Cards from './Components/Cards';
import ListProvider from './global/useList/provider/ListProvider';
import HeaderList from './Components/HeaderList';

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
        <HeaderList />
        <AddTaskForm />
        <Cards />
      </Flex>
    </ListProvider>
  );
}

export default App;
