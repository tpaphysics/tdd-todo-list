import { Box, Flex } from '@chakra-ui/react';
import TodoList from './Components/TodoList';

function App() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDir='column'
      bgImage='url(background.svg)'
      bgSize='600px'
      backgroundRepeat='no-repeat'
      bgPosition='bottom'
      backgroundPosition='75% 50%'
      flexDirection='column'
    >
      <Box h='100vh' w='50%'>
        <TodoList />
      </Box>
    </Flex>
  );
}

export default App;
