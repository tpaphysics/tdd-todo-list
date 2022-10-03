import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import CardTask from '.';
import uuid from 'react-uuid';

describe('CardTask test', () => {
  it('O texto task deve estar em tela', () => {
    const task = `tarefa-${uuid()}`;
    const { getByText } = render(
      <ChakraProvider>
        <CardTask task={task} />
      </ChakraProvider>,
    );
    expect(getByText(`${task}`)).toBeInTheDocument();
  });
});
