import { useState } from 'react';
import Button from '../counter/UI/Button';

export default function AddTodo({ onNewTodo }) {
  const [newTodoVal, setNewTodoVal] = useState('');

  const addTodoHandler = () => {
    onNewTodo(newTodoVal);
    setNewTodoVal('');
  };

  return (
    <div className='flex mb-10 gap-1'>
      <input
        onChange={(event) => setNewTodoVal(event.target.value)}
        value={newTodoVal}
        className='border w-full px-3 py-[6px] rounded-md'
        type='text'
        placeholder='new todo'
      />
      <Button onClick={addTodoHandler} outline>
        add
      </Button>
    </div>
  );
}
