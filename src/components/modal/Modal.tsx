import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/redux';
import { modalActions } from '../../store/_modal';

type ModalProps = {
  confirm?: () => void;
  id: number;
};

function Modal({ confirm, id }: ModalProps) {
  const toShow = useSelector((state: RootState) => state.modal.toShow);
  const text = useSelector((state: RootState) => state.modal.text);

  // paspaudus Close iskviesti veiksma is modal hide()

  const dispatch = useDispatch();

  if (toShow === false) return null;

  const handleConfirm = () => {
    dispatch(modalActions.success());
    confirm && confirm();
  };

  return (
    <div>
      <div
        onClick={() => dispatch(modalActions.hide())}
        className='backdrop bg-slate-500/30 fixed inset-0 '></div>
      <div className='bg-white border rounded-lg px-10 py-7 w-96 fixed top-10 left-1/2 -translate-x-1/2'>
        <h2 className='text-lg font-semibold mb-3'>Modal ({id})</h2>
        <p className='text-lg mb-5'>{text}</p>
        <div className='flex gap-3 border-t pt-3'>
          <button
            onClick={() => dispatch(modalActions.hide())}
            className='px-3 py-1 text-sm uppercase border font-semibold border-red-500 rounded-md'>
            Close
          </button>
          <button
            onClick={handleConfirm}
            className='px-3 py-1 text-sm uppercase border font-semibold border-green-500 rounded-md'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
