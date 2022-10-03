import { BoxProps } from '@chakra-ui/react';
import { CardData } from '../../data/CardData.interface';

export interface CardTaskProps extends BoxProps {
  card: CardData;
}
