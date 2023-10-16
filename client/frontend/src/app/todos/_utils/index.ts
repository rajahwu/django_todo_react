import { type Todo } from "@/todo.types";
import axios from "axios";

export const PROXY = "http://localhost:8000";

export async function getTodos() {
    return await axios.get(`${PROXY}/api/todos/`).then((res) => res.data);
}

export async function udpateTodo(todo: Todo) {
  const res = await axios.put(`${PROXY}/api/todos/${todo.id}/`, todo);
  return res;
}

export async function createTodo(todo: Todo) {
  const res = await axios.post(`${PROXY}/api/todos/${todo.id}/`, todo);
  return res;
}

export async function deleteTodo(todo: Todo) {
  const res = await axios.delete(`${PROXY}/api/todos/${todo.id}`);
  return res;
}
