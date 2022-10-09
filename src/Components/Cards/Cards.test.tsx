import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe } from 'vitest';
import ListProvider from '../../global/useList/provider/ListProvider';
import Cards from '../Cards/index';

describe('Cards component', () => {
  it('Should be in the Cards a lot of tasks', () => {
    const { getByText } = render(
      <ListProvider>
        <Cards />
      </ListProvider>,
    );
    expect(getByText(/tarefa 1/i)).toBeInTheDocument();
    expect(getByText(/tarefa 2/i)).toBeInTheDocument();
  });
});
