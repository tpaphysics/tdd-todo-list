import { Flex } from '@chakra-ui/react';
import React from 'react';
import ListProvider from '../../global/useList/provider/ListProvider';
import AddTaskForm from '../AddTaskForm';
import Cards from '../Cards';
import HeaderList from '../HeaderList';

function TodoList() {
  return (
    <ListProvider>
      <Flex
        flexDir='column'
        gap='8px'
        bg='gray.900'
        w='100%'
        maxW='calc(1.6180*200px + 32px)'
        borderRadius='5px'
        p='16px'
        justifyContent='center'
        m='0 auto'
        mt='120px'
      >
        <HeaderList />
        <AddTaskForm />
        <Cards />
      </Flex>
    </ListProvider>
  );
}

export default TodoList;
