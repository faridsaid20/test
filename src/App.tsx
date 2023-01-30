import { useState } from "react";
import getData from "./api/getData";

function App() {
  const [todoList, setTodoList] = useState<any>();

  getData().then((response) => {
    console.log(response);
  });

  return (
    <div className="App w-screen h-screen justify-center items-center">
      <h1 className="text-3xl font-bold underline mb-6">
        So much to do, so little time!
      </h1>
      {RenderCard()}
    </div>
  );
}

const RenderCard = () => {
  return (
    <div className="relative bg-slate-200 shadow-md rounded-lg px-6 py-6 w-56">
      <div className="absolute h-3 w-3 rounded-full bg-green-600 top-3 right-3"></div>
      What to do, what to do....
    </div>
  );
};

export default App;
