import { Flex } from '@chakra-ui/react';
import CardTask from './Components/CardTask';
import cards from './data/cards';

function App() {
  return (
    <Flex
      flexDir='column'
      gap='8px'
      bg='gray.900'
      w='100%'
      maxW='calc(1.6180*200px + 32px)'
      borderRadius='5px'
      m='0 auto'
      py='16px'
      justifyContent='center'
    >
      {cards.map((card) => (
        <CardTask card={card} key={card.id} mx='auto' />
      ))}
    </Flex>
  );
}

export default App;
