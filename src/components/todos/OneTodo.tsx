import Button from '../counter/UI/Button';

export default function OneTodo({ item, onDelete, onDone }) {
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

      <Button onClick={() => onDelete(item.id)}>Delete</Button>
      <Button onClick={() => onDone(item.id)} outline>
        {item.isDone ? 'Undo' : 'Complete'}
      </Button>
      <Button>Edit</Button>
    </li>
  );
}
