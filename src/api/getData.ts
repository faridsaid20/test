import axios from "axios";

const getData = async (): Promise<any> => {
  const data = await axios.get("/api/todos").then((response) => {
    return response.data;
  });
  return data;
};

export default getData;
