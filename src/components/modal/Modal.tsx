import Button from '../UI/Button';

function Modal() {
  return (
    <div>
      <div className='backdrop bg-slate-500/30 fixed inset-0'></div>
      <div className='bg-white border rounded-lg px-10 py-7 w-96 fixed top-10 left-1/2 -translate-x-1/2'>
        <h2 className='text-lg font-semibold mb-3'>Modal</h2>
        <p className='text-lg mb-5'>Hello</p>
        <div className='flex gap-3 border-t pt-3'>
          <button className='px-3 py-1 text-sm uppercase border font-semibold border-red-500 rounded-md'>
            Close
          </button>
          <button className='px-3 py-1 text-sm uppercase border font-semibold border-green-500 rounded-md'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
