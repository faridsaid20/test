type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};
export const Button = (props: ButtonProps) => {
  const className =
    props.className ??
    "text-white px-6 py-3 mt-6 bg-nexi-indigo-850 rounded-3xl border border-solid border-nexi-indigo-250";
  return (
    <button onClick={props.onClick} className={className}>
      {props.text}
    </button>
  );
};
