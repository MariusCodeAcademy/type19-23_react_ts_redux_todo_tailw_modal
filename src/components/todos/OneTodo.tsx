import { useDispatch } from 'react-redux';
import { TodoType } from '../../types/types';
import Button from '../UI/Button';
import { todoActions } from '../../store/redux';

type OneTodoProps = {
  item: TodoType;
};

export default function OneTodo({ item }: OneTodoProps) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(todoActions.toggleTodo(item.id));
  };

  return (
    <li className='grid grid-cols-4 gap-2'>
      <div className=''>
        <span
          className={
            'font-semibold text-lg ' + `${item.isDone ? 'line-through text-gray-400' : ''}`
          }>
          {' '}
          {item.title}
        </span>
        <span>
          - is
          {item.isDone ? ' Done' : ' NOT Done'}
        </span>{' '}
      </div>

      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
      <Button onClick={handleToggle} outline>
        {item.isDone ? 'Undo' : 'Complete'}
      </Button>
      <Button>Edit</Button>
    </li>
  );
}
