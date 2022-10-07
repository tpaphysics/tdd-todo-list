import '@testing-library/jest-dom';
import { describe, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import ListProvider from '../../global/useList/provider/ListProvider';
import AddTaskForm from '.';

describe('AddCardFormvcomponent', () => {
  it('Should be text Add in the document ""', () => {
    const { getByText } = render(
      <ListProvider>
        <AddTaskForm />
      </ListProvider>,
    );
    expect(getByText(/Add/i)).toBeInTheDocument();
  });
});
