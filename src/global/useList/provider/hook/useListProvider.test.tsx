import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import cards from '../../../../data/cards';
import { useListProvider } from './useListProvider';
import { CardData } from '../../../../data/CardData.interface';

describe('useListProvider hook', () => {
  it('Should be cards equal cardsMock', () => {
    const cardsMock = cards;
    const { result } = renderHook(() => useListProvider(cardsMock));

    act(() => {
      result.current.cards;
    });
    expect(result.current.cards).toBe(cardsMock);
  });

  it('Should be newCardMock equal final', () => {
    const cardsMock = cards;
    const newCardMock = { id: '12345', completed: false, task: 'New Task' } as CardData;

    const { result } = renderHook(() => useListProvider(cardsMock));

    act(() => {
      result.current.addCard(newCardMock);
    });
    const [final] = result.current.cards.filter((card) => card === newCardMock);

    expect(final).toBe(newCardMock);
  });
});
