import express from "express";
import axios from "axios";

const app = express();

app.get("/api/todos", async (req, res) => {
  let toDos = await getData();
  res.json(toDos);
});

async function getData() {
  let data = await axios
    .get("https://gorest.co.in/public/v2/todos")
    .then((response) => {
      return response.data;
    });

  return data;
}

export const handler = app;
