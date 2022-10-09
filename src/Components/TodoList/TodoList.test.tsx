import '@testing-library/jest-dom';
import { describe, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import TodoList from '.';

describe('TodoList test', () => {
  it('Should add task when write input and click in add button', () => {
    const { getByText, getByTestId } = render(<TodoList />);
    fireEvent.input(getByTestId('list-input'), { target: { value: 'My List' } });
    fireEvent.click(getByText(/add/i));

    expect(getByText(/my list/i)).toBeInTheDocument();
  });

  it('Should be disble add button when input task is empty', () => {
    const { getByText, getByTestId } = render(<TodoList />);
    fireEvent.input(getByTestId('list-input'), { target: { value: '' } });

    expect(getByText(/add/i).closest('button')).toBeDisabled();
  });
});
