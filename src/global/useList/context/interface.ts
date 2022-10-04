import { CardData } from '../../../data/CardData.interface';

export interface IListContext {
  cards: CardData[];
  addCard: (card: CardData) => void;
  removeCard: (cardId: string) => void;
}
