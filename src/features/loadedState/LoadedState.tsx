import { TodoCard, TodoItemType } from "../../components/todo";

type LoadedStateProps = {
  items: TodoItemType[];
};
export const LoadedState = (props: LoadedStateProps) => {
  return (
    <div className="grid grid-cols-2 justify-center items-start gap-9 p-0 w-3/5 min-w-[40em]">
      <TodoCard items={props.items} type={"pending"} />
      <TodoCard items={props.items} type={"completed"} />
    </div>
  );
};
