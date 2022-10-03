import { useCallback, useState } from 'react';

export const useCardTask = (cardCompleted: boolean) => {
  const [checked, setChecked] = useState(cardCompleted);

  const handleClickToogleCheck = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return { checked, setChecked, handleClickToogleCheck };
};
