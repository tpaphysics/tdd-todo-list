import { CardData } from './CardData.interface';

export interface ListData {
  id: string;
  name: string;
  key: number;
  color: string;
  cards: CardData[];
}
