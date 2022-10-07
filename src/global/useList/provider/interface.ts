import { BoxProps } from '@chakra-ui/react';
import { ListData } from '../../../data/ListData.interface';

export interface ListProviderProps extends BoxProps {
  list: ListData;
}
