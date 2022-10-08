import { Heading, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsListOl } from 'react-icons/bs';

function HeaderList() {
  return (
    <Heading mb='8px' display='flex' alignItems='center' justifyContent='space-between'>
      <Flex alignItems='center'>
        <Icon as={BsListOl} color='yellow.300' h='5' w='5' />
        <Text ml='8px' fontSize='lg' color='whiteAlpha.600' fontWeight='extrabold'>
          {`List`}
        </Text>
      </Flex>
      <Icon
        as={AiFillCloseCircle}
        color='yellow.300'
        _hover={{ color: 'yellow.500' }}
        h='5'
        w='5'
        cursor='pointer'
      />
    </Heading>
  );
}

export default HeaderList;
