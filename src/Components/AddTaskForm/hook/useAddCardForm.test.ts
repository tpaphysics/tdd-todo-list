import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useAddCardForm } from './useAddCardForm';

describe('useCount hook', () => {
  it('Should be inital value task equal ""', () => {
    const { result } = renderHook(() => useAddCardForm());
    expect(result.current.task).toBe('');
  });
});
