import { CardData } from '../../data/CardData.interface';

export interface AddTaskFormProps {
  addCard: (card: CardData) => void;
}
