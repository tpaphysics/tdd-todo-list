import { useCallback, useState } from 'react';
import uuid from 'react-uuid';
import { CardData } from '../../../data/CardData.interface';
import { useList } from '../../../global/useList';
import { formatMax } from '../utils/utils';

export const useAddTaskForm = () => {
  const [task, setTask] = useState('');
  const { addCard } = useList();

  const handleTaskChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }, []);

  const handleClickAddButton = useCallback(() => {
    const format = formatMax(task);
    const newCard = { id: uuid(), task: format, completed: false } as CardData;
    addCard(newCard);
    setTask('');
  }, [addCard, task]);

  return { task, setTask, handleTaskChange, handleClickAddButton };
};
