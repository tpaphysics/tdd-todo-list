import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import CardTask from '.';
import uuid from 'react-uuid';
import { CardData } from '../../data/CardData.interface';

describe('CardTask test', () => {
  const card = {
    id: uuid(),
    task: `tarefa-${uuid()}`,
    completed: true,
  } as CardData;
  it('Should be the text on the document', () => {
    const { getByText } = render(
      <ChakraProvider>
        <CardTask card={card} />
      </ChakraProvider>,
    );
    expect(getByText(`${card.task}`)).toBeInTheDocument();
  });
});
