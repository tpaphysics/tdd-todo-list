import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { formatMax } from './utils';

describe('utils function', () => {
  it('Should be return task with length equal 28, formatMax', () => {
    const max = 28;
    const mockedTask = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // length equal 28
    const res = formatMax(mockedTask);
    expect(res.length).toBe(max);
  });
});
