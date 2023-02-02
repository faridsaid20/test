import { Spinner } from "../../components/spinner";

export const LoadingState = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center gap-3">
      <div className="flex flex-col justify-center bg-nexi-blue-trnsp-5 w-80 h-72 rounded-3xl relative">
        <Spinner />
        <p className="text-2xl mx-12 mt-6 text-left font-bold text-nexi-blue">
          Please wait...
        </p>
        <p className="text-xs mx-12 text-left font-normal">
          We are fetching your to-do-tasks.
        </p>
      </div>
    </div>
  );
};
