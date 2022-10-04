import { useCallback, useState } from 'react';
import { CardData } from '../../../../data/CardData.interface';

export const useListProvider = (initialCards: CardData[]) => {
  const [cards, setCards] = useState(initialCards);

  const addCard = useCallback(
    (newCard: CardData) => {
      setCards([...cards, newCard]);
    },
    [cards],
  );

  const removeCard = useCallback(
    (cardId: string) => {
      const updated = cards.filter((card) => card.id != cardId);
      setCards(updated);
    },
    [cards],
  );

  return { cards, addCard, removeCard };
};
