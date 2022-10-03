import { useCallback, useState } from 'react';

export const useCardTask = () => {
  const [checked, setChecked] = useState(false);

  const handleClickToogleCheck = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return { checked, setChecked, handleClickToogleCheck };
};
