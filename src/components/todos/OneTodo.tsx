import { useDispatch, useSelector } from 'react-redux';
import { TodoType } from '../../types/types';
import Button from '../UI/Button';
import { RootState, todoActions } from '../../store/redux';
import { modalActions } from '../../store/_modal';
import Modal from '../modal/Modal';

type OneTodoProps = {
  item: TodoType;
};

export default function OneTodo({ item }: OneTodoProps) {
  const dispatch = useDispatch();
  const modalSucess = useSelector((state: RootState) => state.modal.success);
  console.log('modalSucess ===', modalSucess);

  const handleDelete = () => {
    const obj = {
      msg: `Are you sure you want to delete? ${item.id}`,
      action: dispatch(todoActions.toggleTodo(item.id)),
    };

    dispatch(modalActions.show(obj));
    // ar sekme ar ne

    // dispatch(todoActions.deleteTodo(item.id));
  };

  const handleToggle = () => {
    dispatch(todoActions.toggleTodo(item.id));
  };

  return (
    <>
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

        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleToggle} outline>
          {item.isDone ? 'Undo' : 'Complete'}
        </Button>
        <Button>Edit</Button>
      </li>
    </>
  );
}
