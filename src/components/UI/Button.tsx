type ButtonProps = {
  onClick: () => void;
  children: string;
  outline: boolean;
  type: 'button' | 'submit' | 'reset';
};

export default function Button({
  onClick = () => {},
  children,
  outline,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        outline ? 'bg-white text-indigo-500' : 'bg-indigo-500 text-white'
      }  px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md`}
      type={type}>
      {children}
    </button>
  );
}
