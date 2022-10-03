import { useCallback, useState } from 'react';

export const useCardTask = () => {
  const [checked, setChecked] = useState(false);

  const handleClickCheck = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return { handleClickCheck };
};
