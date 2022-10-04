import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { CardTaskProps } from './interface';
import { BsTrash } from 'react-icons/bs';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { useCardTask } from './hook/useCardTask';

function CardTask({ card, ...props }: CardTaskProps) {
  const { checked, handleClickToogleCheck, handleRemoveCard } = useCardTask(card.completed);
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
      borderColor='yellow.400'
      justifyContent='space-between'
      borderLeft={checked ? '2px solid' : ''}
      borderLeftColor='yellow.400'
    >
      <HStack onClick={handleClickToogleCheck}>
        <Icon as={checked ? MdOutlineCheckBox : MdOutlineCheckBoxOutlineBlank} color='yellow.400' />
        <Text color='whiteAlpha.800' fontWeight='600'>
          {card.task}
        </Text>
      </HStack>

      <Icon as={BsTrash} color='yellow.400' onClick={() => handleRemoveCard(card.id)} />
    </Box>
  );
}

export default CardTask;
