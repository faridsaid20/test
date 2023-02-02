import { create } from "zustand";

export type Status = "completed" | "pending" | "none";

interface CardState {
  dragStarted: boolean;
  draggedType: Status;
  isPendingChangeStatus: boolean;
  changeType: Status;
  id: number;
  setStarted: (draggedType: Status) => void;
  setStopped: () => void;
  changeStatusStart: (id: number, status: Status) => void;
  changeStatusCompleted: () => void;
}

export const useCardStore = create<CardState>()((set) => ({
  dragStarted: false,
  draggedType: "none",
  isPendingChangeStatus: false,
  changeType: "none",
  id: -1,
  setStarted: (draggedType: Status) =>
    set(() => ({ dragStarted: true, draggedType: draggedType })),
  setStopped: () => set(() => ({ dragStarted: false, draggedType: "none" })),
  changeStatusStart: (id: number, status: Status) =>
    set(() => ({ isPendingChangeStatus: true, id: id, changeType: status })),
  changeStatusCompleted: () =>
    set(() => ({
      isPendingChangeStatus: false,
      id: -1,
      changeType: "none",
    })),
}));
