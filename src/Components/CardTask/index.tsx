import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { CardTaskProps } from './interface';
import { BsTrash } from 'react-icons/bs';
import { useCardTask } from './hook/useCardTask';

function CardTask({ card, ...props }: CardTaskProps) {
  const { checked, handleClickToogleCheck } = useCardTask(card.completed);
  return (
    <Box
      {...props}
      data-testid={`card-${card.id}`}
      cursor='pointer'
      w='calc(1.6180*200px)'
      bg='gray.600'
      h='50px'
      borderRadius='5px'
      display='flex'
      alignItems='center'
      px='16px'
      borderColor='green.300'
      justifyContent='space-between'
      borderLeft={checked ? '4px solid' : ''}
      borderLeftColor='green.300'
      onClick={handleClickToogleCheck}
    >
      <Text color='whiteAlpha.800' fontWeight='600'>
        {card.task}
      </Text>
      <Icon as={BsTrash} color='green.300' />
    </Box>
  );
}

export default CardTask;
