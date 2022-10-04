import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useList } from '../../global/useList';
import CardTask from '../CardTask';

function Cards() {
  const { cards } = useList();
  return (
    <Flex flexDir='column' gap='8px' mt='4px'>
      {cards.map((card) => (
        <CardTask card={card} key={card.id} mx='auto' />
      ))}
    </Flex>
  );
}

export default Cards;
