import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import getData from "./api/getData";
import { Header } from "./components/header";
import { TodoItemType } from "./components/todo";
import { EmptyState } from "./features/emptyState";
import { LoadingState } from "./features/loadingState";
import { LoadedState } from "./features/loadedState";
import { useCardStore } from "./stores";

const App = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id, isPendingChangeStatus, changeType, changeStatusCompleted } =
    useCardStore(
      (state) => ({
        id: state.id,
        isPendingChangeStatus: state.isPendingChangeStatus,
        changeType: state.changeType,
        changeStatusCompleted: state.changeStatusCompleted,
      }),
      shallow
    );
  useEffect(() => {
    if (isPendingChangeStatus) {
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
          todoList[i].status = changeType;
          setTodoList([...todoList]);
          changeStatusCompleted();
          break;
        }
      }
    }
  }, [id, isPendingChangeStatus, changeType, changeStatusCompleted]);

  const onClickHandler = () => {
    setIsLoading(true);
    getData()
      .then((response) => {
        setTodoList(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setTodoList([]);
        setIsLoading(false);
      });
  };
  let component;
  if (isLoading) {
    component = <LoadingState />;
  } else if (todoList?.length > 0) {
    component = <LoadedState items={todoList} />;
  } else {
    component = <EmptyState onClick={onClickHandler} />;
  }
  return (
    <div className="App flex flex-col flex-grow-0 mt-14 items-center">
      <Header />
      {component}
    </div>
  );
};

export default App;
