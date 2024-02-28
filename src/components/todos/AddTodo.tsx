import { useState } from 'react';
import Button from '../UI/Button';

export default function AddTodo() {
  const [newTodoVal, setNewTodoVal] = useState('');

  const addTodoHandler = () => {
    // onNewTodo(newTodoVal);
    // dispatch su redux ir paduodam newTodoVal
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
