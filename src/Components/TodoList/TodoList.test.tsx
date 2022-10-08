import '@testing-library/jest-dom';
import { describe, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import TodoList from '.';
import cards from '../../data/cards';

describe('TodoList test', () => {
  it('Should add task when write input and click in add button', () => {
    const { getByText, getByTestId } = render(<TodoList />);
    fireEvent.input(getByTestId('list-input'), { target: { value: 'My List' } });
    fireEvent.click(getByText(/add/i));

    expect(getByText(/my list/i)).toBeInTheDocument();
  });

  it('Should remove task when click in task trash', () => {
    const { getByText, getByTestId } = render(<TodoList />);
    fireEvent.click(getByTestId('close-task-1'));

    expect(() => getByText(/tarefa 1/i)).toThrow();
  });
});
