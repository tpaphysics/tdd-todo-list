import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useAddCardForm } from './useAddCardForm';

describe('useAddCardForm hook', () => {
  it('Should be inital task value equal ""', () => {
    const { result } = renderHook(() => useAddCardForm());
    expect(result.current.task).toBe('');
  });

  it('Should be task value equal "TEST"', () => {
    const { result } = renderHook(() => useAddCardForm());
    act(() => {
      result.current.setTask('TEST');
    });
    expect(result.current.task).toBe('TEST');
  });

  it('handleTaskChange, Should be task value equal "TASK"', () => {
    const { result } = renderHook(() => useAddCardForm());
    const mockedEvent = { target: { value: 'TASK' } } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.handleTaskChange(mockedEvent);
    });
    expect(result.current.task).toBe('TASK');
  });
});
