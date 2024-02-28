//

import Modal from './components/modal/Modal';
import TodoApp from './components/todos/TodoApp';

function App() {
  return (
    <div className='container'>
      <Modal toShow={true} />
      <h1 className='text-5xl font-medium underline'>App</h1>
      <TodoApp />
    </div>
  );
}

export default App;
