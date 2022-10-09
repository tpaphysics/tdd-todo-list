import '@testing-library/jest-dom';
import { describe, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useAddTaskForm } from './useAddTaskForm';
import * as hooks from '../../../global/useList';
import ListProvider from '../../../global/useList/provider/ListProvider';
import { BoxProps } from '@chakra-ui/react';

import React from 'react';

describe('useAddTaskForm hook', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Should be inital task value equal ""', () => {
    const { result } = renderHook(() => useAddTaskForm());
    expect(result.current.task).toBe('');
  });

  it('Should be task value equal "TEST"', () => {
    const { result } = renderHook(() => useAddTaskForm());
    act(() => {
      result.current.setTask('TEST');
    });
    expect(result.current.task).toBe('TEST');
  });

  it('handleTaskChange, Should be task value equal "TASK"', () => {
    const { result } = renderHook(() => useAddTaskForm());
    const mockedEvent = { target: { value: 'TASK' } } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.handleTaskChange(mockedEvent);
    });
    expect(result.current.task).toBe('TASK');
  });

  it('handleClickButton, Should be called once mockedAddList', () => {
    const wrapper = ({ children }: BoxProps) => <ListProvider>{children}</ListProvider>;
    const { result } = renderHook(() => useAddTaskForm(), {
      wrapper,
    });
    const mockedUseList = vi
      .spyOn(hooks, 'useList')
      .mockImplementation(() => ({ AddCard: vi.fn() } as any));

    act(() => {
      result.current.handleClickAddButton();
    });
    expect(mockedUseList).toBeCalledTimes(1);
  });
});
