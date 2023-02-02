import { memo } from "react";
import { TodoItemProps } from "./";

const _TodoItem = (props: TodoItemProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col box-border w-full h-52 shadow-nexi-task-card items-start p-6 gap-2 isolate bg-white rounded-lg border-l-[16px] ${props.borderColor} text-base`}
    >
      <div className="w-full h-full font-semibold text-black">
        {props.title}
      </div>
      <div className="flex text-gray-400 font-normal gap-1 w-full">
        <div className="text-right font-medium flex-1">
          #{props.id.toString()}
        </div>
      </div>
    </div>
  );
};

const isEqual = () => true;
export const TodoItem = memo(_TodoItem, isEqual);
