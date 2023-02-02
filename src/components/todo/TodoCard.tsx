import { useMemo } from "react";
import { Status, useCardStore } from "../../stores";
import { TodoItem, TodoItemDraggable, TodoItemType } from "./";
type TodoProps = {
  items: TodoItemType[];
  type: Status;
};
export const TodoCard = (props: TodoProps): JSX.Element => {
  const isDragStarted = useCardStore((state) => state.dragStarted);
  const isCompleted = props.type === "completed";

  const todoItems = useMemo(() => {
    let borderColor = "border-l-lime-500";

    if (props.type === "pending") {
      borderColor = "border-l-orange-500";
    }
    return props.items
      .filter((todoItem) => {
        return todoItem.status === props.type;
      })
      .map((todo: TodoItemType) => {
        if (isCompleted) {
          return <TodoItem key={todo.id} {...todo} borderColor={borderColor} />;
        }
        return (
          <TodoItemDraggable
            key={todo.id}
            {...todo}
            borderColor={borderColor}
          />
        );
      });
  }, [props.items, props.type]);

  return (
    <div
      className={`relative box-border mb-10 min-w-fit flex flex-col items-start py-4 px-6 gap-4 border border-dashed border-gray-300 rounded-lg shadow-md z-1 ${props.type}`}
    >
      {isDragStarted && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-50 z-10"></div>
      )}
      <h4 className="w-24 h-8 text-2xl font-bold text-nexi-warm-gray-350">
        {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
      </h4>
      {todoItems}
      {isCompleted && (
        <div className="flex flex-col h-52 justify-center items-center p-6 gap-2 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="font-normal text-lg text-center text-gray-500">
            Drag and Drop here to change a task's status
          </p>
        </div>
      )}
    </div>
  );
};
