import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCardTask } from './useCardTask';

describe('useCardTask hook', () => {
  it('Should be false the initial value of checked', () => {
    const { result } = renderHook(() => useCardTask());
    let initialValue;
    act(() => {
      initialValue = result.current.checked;
    });
    expect(initialValue).toBe(false);
  });
});
