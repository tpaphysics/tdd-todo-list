import { useContext } from 'react';
import ListContext from './context/context';

export const useList = () => {
  return useContext(ListContext);
};
