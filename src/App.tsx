import { Button, Flex, HStack, Input } from '@chakra-ui/react';
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
      p='16px'
      justifyContent='center'
    >
      <HStack>
        <Input
          variant='flushed'
          placeholder='New task'
          bg='gray.800'
          _placeholder={{ color: 'whiteAlpha.600' }}
          color='whiteAlpha.800'
          fontWeight='700'
          outline='0'
          flex='2'
          borderRadius='5px'
          focusBorderColor='green.300'
          px='18px'
        />
        <Button flex='1' colorScheme='green'>
          Add
        </Button>
      </HStack>

      <Flex flexDir='column' gap='8px' mt='4px'>
        {cards.map((card) => (
          <CardTask card={card} key={card.id} mx='auto' />
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
