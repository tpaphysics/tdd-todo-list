/* eslint-disable react-hooks/rules-of-hooks */
import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';

import ListProvider from './ListProvider';
import { useList } from '..';

import { CardData } from '../../../data/CardData.interface';
import cards from '../../../data/cards';

describe('useListProvider hook', () => {
  const mockCardId = cards[0].id;
  const mockNewCard = { id: '123', completed: false, task: 'new' } as CardData;
  function TestMockComponent() {
    const { cards, addCard, removeCard } = useList();
    return (
      <>
        <div>
          {cards.map((card) => (
            <li key={card.id}>{card.task}</li>
          ))}
        </div>
        <button onClick={() => addCard(mockNewCard)}>add</button>
        <button onClick={() => removeCard(mockCardId)}>remove</button>
      </>
    );
  }

  it('Should be card components into TestMockComponent', () => {
    const { getByText } = render(
      <ListProvider>
        <TestMockComponent />
      </ListProvider>,
    );
    expect(getByText(/Tarefa 1/i)).toBeInTheDocument();
    expect(getByText(/Tarefa 2/i)).toBeInTheDocument();
  });

  it('Should be card task in TestMockComponent', () => {
    const { getByText } = render(
      <ListProvider>
        <TestMockComponent />
      </ListProvider>,
    );
    fireEvent.click(getByText('add'));
    expect(getByText('new')).toBeInTheDocument();
  });
  it('Should remove task of the TestMockComponent', () => {
    const { getByText } = render(
      <ListProvider>
        <TestMockComponent />
      </ListProvider>,
    );
    fireEvent.click(getByText('remove'));
    expect(() => getByText('Tarefa 1')).toThrow();
  });
});
