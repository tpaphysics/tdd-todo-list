import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { render } from '@testing-library/react';

import ListProvider from '../../global/useList/provider/ListProvider';
import AddTaskForm from '.';

describe('AddCardFormvcomponent', () => {
  it('Should be in the document the text Add', () => {
    const { getByText } = render(
      <ListProvider>
        <AddTaskForm />
      </ListProvider>,
    );
    expect(getByText(/Add/i)).toBeInTheDocument();
  });
});
