import { useCallback, useState } from 'react';
import uuid from 'react-uuid';
import { CardData } from '../../../data/CardData.interface';
import { useList } from '../../../global/useList';

export const useAddCardForm = () => {
  const [task, setTask] = useState('');
  const { addCard } = useList();

  const handleTaskChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }, []);

  const handleClickAddButton = useCallback(() => {
    const newCard = { id: uuid(), task, completed: false } as CardData;
    addCard(newCard);
    setTask('');
  }, [addCard, task]);

  return { task, setTask, handleTaskChange, handleClickAddButton };
};
