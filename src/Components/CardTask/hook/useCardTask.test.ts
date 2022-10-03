import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCardTask } from './useCardTask';
import initialCards from '../../../data/cards';

describe('useCardTask hook', () => {
  const card = initialCards[0];

  it('Should be false the initial value of checked', () => {
    const { result } = renderHook(() => useCardTask(card.completed));
    let initialValue;
    act(() => {
      initialValue = result.current.checked;
    });
    expect(initialValue).toBe(card.completed);
  });

  it('Should be changed to true when the handleClickToogleCheck function is executed', () => {
    const { result } = renderHook(() => useCardTask(card.completed));

    act(() => {
      result.current.handleClickToogleCheck();
    });
    expect(result.current.checked).toBe(!card.completed);
  });
});
