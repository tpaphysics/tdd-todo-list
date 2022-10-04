import { BoxProps } from '@chakra-ui/react';
import React from 'react';
import initialCards from '../../../data/cards';
import ListContext from '../context/context';
import { useListProvider } from './hook/useListProvider';

function ListProvider({ children }: BoxProps) {
  const { cards, addCard, removeCard } = useListProvider(initialCards);
  return (
    <ListContext.Provider value={{ cards, addCard, removeCard }}>{children}</ListContext.Provider>
  );
}

export default ListProvider;
