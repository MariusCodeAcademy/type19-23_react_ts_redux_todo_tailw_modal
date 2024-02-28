import { TodoType } from '../types/types';

type initTodosState = {
  todos: TodoType[];
};

const initTodos: initTodosState = {
  todos: [
    { id: 1, title: 'Pull ups', isDone: false },
    { id: 2, title: 'Read a book', isDone: true },
    { id: 3, title: 'Buy Bread', isDone: false }, // idToToggle === 3
    { id: 4, title: 'Buy Bread', isDone: true }, // id to dele
  ],
};
