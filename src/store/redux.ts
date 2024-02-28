import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import modalReducer from './_modal';

type initTodosState = {
  todosArr: TodoType[];
};

const initTodos: initTodosState = {
  todosArr: [
    { id: 1, title: 'Pull ups', isDone: false },
    { id: 2, title: 'Read a book', isDone: true },
    { id: 3, title: 'Buy Bread', isDone: false }, // idToToggle === 3
    { id: 4, title: 'Buy Bread', isDone: true }, // id to dele
  ],
};

let lastId = 5;

const todosSlice = createSlice({
  name: 'todos',
  initialState: initTodos,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTitle = action.payload;
      console.log('add todo', newTitle);
      // pasiimti title reiksme is payload
      const newTodoObj: TodoType = {
        id: lastId++,
        isDone: false,
        title: newTitle,
      };
      // state.todosArr = [...state.todosArr, newTodoObj];
      state.todosArr.push(newTodoObj);
      // sukurti nauja todo Obj
      // ikelti tObj i state
    },
    deleteTodo(state, action: PayloadAction<number>) {
      console.log('deleting todo', action.payload);
      // trinam su filter
      state.todosArr = state.todosArr.filter((tObj) => tObj.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      console.log('toggle', action.payload);
      const idToToggle = action.payload;
      const found = state.todosArr.find((tObj) => tObj.id === idToToggle);
      if (!found) return;
      found.isDone = !found.isDone;
    },
    editTodo() {},
  },
});

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    modal: modalReducer,
  },
});

export const todoActions = todosSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
