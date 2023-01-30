import axios from "axios";

interface TodosData {
  due_on: any;
  id: any;
  status: string;
  title: number;
  user_id: number;
}

type ToDosStatus = "pending" | "completed";

const getData = async (): Promise<any> => {
  let data = await axios.get("/api/todos").then((response) => {
    return response.data;
  });
  return data;
};

export default getData;
