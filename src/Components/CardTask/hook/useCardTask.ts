import { useCallback, useState } from 'react';
import { useList } from '../../../global/useList';

export const useCardTask = (cardCompleted: boolean) => {
  const [checked, setChecked] = useState(cardCompleted);
  const { removeCard } = useList();

  const handleClickToogleCheck = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const handleRemoveCard = removeCard;

  return { checked, setChecked, handleClickToogleCheck, handleRemoveCard };
};
