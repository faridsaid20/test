import { memo, useState, useRef } from "react";
import Draggable from "react-draggable";
import { Status, useCardStore } from "../../stores";
import { areRectsTouching } from "../../utils";
import { FormatedDate } from "../date";
import { TodoItemProps } from "./";

const allStatuses: Status[] = ["pending", "completed"];

const _TodoItem = (props: TodoItemProps): JSX.Element => {
  const [zIndex, setZIndex] = useState("");
  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const setStarted = useCardStore((state) => state.setStarted);
  const setStopped = useCardStore((state) => state.setStopped);
  const changeStatusStart = useCardStore((state) => state.changeStatusStart);

  const onStart = (e: any, data: any) => {
    setStarted(props.status);
    setDefaultPosition({ x: data.x, y: data.y });
    setZIndex("z-20");
  };
  const onStop = (e: any, data: any) => {
    const dragedPos = data.node.getBoundingClientRect();
    allStatuses.forEach((status) => {
      const frameRect = document
        .getElementsByClassName(status)[0]
        .getBoundingClientRect();

      if (areRectsTouching(dragedPos, frameRect)) {
        changeStatusStart(props.id, status);
      }
    });
    setStopped();
    setZIndex("z-1");
  };
  return (
    <Draggable
      onStart={onStart}
      onStop={onStop}
      defaultPosition={defaultPosition}
      position={defaultPosition}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`flex flex-col box-border w-full h-52 shadow-nexi-task-card items-start p-6 gap-2 isolate bg-white rounded-lg border-l-[16px] ${props.borderColor} ${zIndex} text-base`}
      >
        <div className="w-full h-full font-semibold text-black">
          {props.title}
        </div>
        <div className="flex text-gray-400 font-normal gap-1 w-full">
          <FormatedDate date={props.due_on} />
          <div className="text-right font-medium flex-1">
            #{props.id.toString()}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

const isEqual = () => true;
export const TodoItemDraggable = memo(_TodoItem, isEqual);
