import '@testing-library/jest-dom';
import { describe, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useAddCardForm } from './useAddCardForm';
import * as hooks from '../../../global/useList';
import { IListContext } from '../../../global/useList/context/interface';
import ListProvider from '../../../global/useList/provider/ListProvider';
import { BoxProps } from '@chakra-ui/react';
import { MdAddReaction } from 'react-icons/md';
import { CardData } from '../../../data/CardData.interface';
import React from 'react';

describe('useAddCardForm hook', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  it('handleClickButton, Should be called once mockedAddCard', () => {
    const wrapper = ({ children }: BoxProps) => <ListProvider>{children}</ListProvider>;
    const { result } = renderHook(() => useAddCardForm(), {
      wrapper,
    });
    const spy = vi.spyOn(result.current, 'setTask');

    act(() => {
      result.current.handleClickAddButton();
    });
    expect(spy).toBeCalledTimes(1);
    expect(mockedUseList).toBeCalledTimes(1);
  });
});