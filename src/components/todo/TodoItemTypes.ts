import { Status } from "../../stores";

export type TodoItemType = {
  title: string;
  id: number;
  user_id: number;
  due_on: string;
  status: Status;
};
export type TodoItemProps = TodoItemType & { borderColor: string };
