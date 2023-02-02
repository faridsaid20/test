import { Button } from "../../components/button";

type EmptyStateProps = {
  onClick: () => void;
};

export const EmptyState = (props: EmptyStateProps) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center gap-3">
      <p className="text-2xl font-bold relative">Nothing to see here...</p>
      <p className="text-xl relative">Grab something to do</p>
      <Button
        className="text-white px-6 py-3 mt-6 bg-nexi-indigo-850 rounded-3xl border border-solid border-nexi-indigo-250"
        text={"Get the tasks"}
        onClick={props.onClick}
      ></Button>
    </div>
  );
};
