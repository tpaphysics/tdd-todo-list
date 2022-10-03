import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { CardTaskProps } from './interface';
import { BsTrash } from 'react-icons/bs';

function CardTask({ task }: CardTaskProps) {
  return (
    <Box
      w='calc(1.6180*200px)'
      bg='gray.600'
      h='50px'
      borderRadius='5px'
      display='flex'
      alignItems='center'
      px='16px'
      borderColor='green.300'
      justifyContent='space-between'
      borderLeft='5px solid'
      borderLeftColor='green.300'
    >
      <Text color='whiteAlpha.800' fontWeight='600'>
        {task}
      </Text>
      <Icon as={BsTrash} color='green.300' />
    </Box>
  );
}

export default CardTask;
