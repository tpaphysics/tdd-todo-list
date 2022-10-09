import { HStack, Input, Button } from '@chakra-ui/react';
import React from 'react';
import { useAddTaskForm } from './hook/useAddTaskForm';

function AddTaskForm() {
  const { task, handleTaskChange, handleClickAddButton } = useAddTaskForm();
  return (
    <HStack>
      <Input
        data-testId='list-input'
        value={task}
        onChange={handleTaskChange}
        variant='flushed'
        placeholder='New task'
        bg='gray.800'
        _placeholder={{ color: 'whiteAlpha.600' }}
        color='whiteAlpha.800'
        fontWeight='700'
        outline='0'
        flex='2'
        borderRadius='5px'
        focusBorderColor='yellow.400'
        px='18px'
      />
      <Button
        flex='1'
        isDisabled={task === '' ? true : false}
        colorScheme='yellow'
        onClick={handleClickAddButton}
      >
        Add
      </Button>
    </HStack>
  );
}

export default AddTaskForm;
