<div align="center">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />

<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>

<img src="https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=FFD62E" alt="vitest"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="React" />

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" alt="Chakra-ui" />
</div>
<br/>
<br/>

## **💻 Project**

<p align="center">
<img src="./public/app.gif" alt="desktop-app" width="800px"/>
</p>

This **Todo List** project was developed as an exercise to develop TDD architecture skills in frontend development. An own design pattern was created. The folder structure is as follows:

<p align="center">
<img src="./public/tree.png" alt="desktop" width="200px"/>
</p>

Each component that has react state has a hook folder to separate the business rule from the TSX component states. This way we were able to test the hooks with the React Testing Library. Additional functions can be created in the utils folder as in the example below:

**_index.tsx_**

```tsx
function AddTaskForm() {
  const { task, handleTaskChange, handleClickAddButton } = useAddCardForm();
  return (
    <HStack>
      <Input
        data-testId='list-input'
        value={task}
        onChange={handleTaskChange}
        variant='flushed'
        placeholder='New task'
        bg='gray.800'
        _placeholder={{ color: 'whiteAlpha.600' }}
        color='whiteAlpha.800'
        fontWeight='700'
        outline='0'
        flex='2'
        borderRadius='5px'
        focusBorderColor='yellow.400'
        px='18px'
      />
      <Button
        flex='1'
        isDisabled={task === '' ? true : false}
        colorScheme='yellow'
        onClick={handleClickAddButton}
      >
        Add
      </Button>
    </HStack>
  );
}

export default AddTaskForm;
```

**_useAddCardForm.ts_**

```typescript
export const useAddCardForm = () => {
  const [task, setTask] = useState('');
  const { addCard } = useList();

  const handleTaskChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }, []);

  const handleClickAddButton = useCallback(() => {
    const format = formatMax(task);
    const newCard = { id: uuid(), task: format, completed: false } as CardData;
    addCard(newCard);
    setTask('');
  }, [addCard, task]);

  return { task, setTask, handleTaskChange, handleClickAddButton };
};
```

**_AddTaskForm.utils.test.ts_**

```typescript
describe('utils functions', () => {
  it('Should be return task with length equal 28, formatMax', () => {
    const max = 28;
    const mockedTask = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'; // length equal 28
    const res = formatMax(mockedTask);
    expect(res.length).toBe(max);
  });
});
```

**_utils.ts_**

```typescript
function formatMax(task: string) {
  const max = 28;
  const taskLength = task.length;

  if (taskLength >= max) {
    const part = task.substring(0, max - 3);
    return `${part}...`;
  } else {
    return task;
  }
}

export { formatMax };
```

This way we can test each component part separately:

**_useAddTaskForm.test.ts_**

```tsx
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

  it('handleClickButton, Should be called once mockedAddList', () => {
    const wrapper = ({ children }: BoxProps) => <ListProvider>{children}</ListProvider>;
    const { result } = renderHook(() => useAddCardForm(), {
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
```

## Get Started

```bash
yarn && yarn vite
```

## 🛠️ Test

```bash
yarn test
```

## **👨‍🚀 Author**

<a href="https://github.com/tpaphysics">
<img alt="Thiago Pacheco" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/46402647?v=4?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="100px"/>
  <br />
  <sub>
    <b>Thiago Pacheco de Andrade</b>
  </sub>
</a>
<br />

👋 My contacts!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/)](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com)](mailto:physics.posgrad.@gmail.com)
