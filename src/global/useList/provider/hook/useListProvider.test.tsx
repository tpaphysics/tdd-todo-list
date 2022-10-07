import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, render, renderHook } from '@testing-library/react';
import cards from '../../../../data/cards';
import { useListProvider } from './useListProvider';

describe('useListProvider hook', () => {
  it('Should be cards equal cardsMock ', () => {
    const cardsMock = cards;
    const { result } = renderHook(() => useListProvider(cardsMock));

    act(() => {
      result.current.cards;
    });
    expect(result.current.cards).toBe(cardsMock);
  });
});
