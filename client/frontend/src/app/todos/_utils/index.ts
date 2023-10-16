import { type Todo } from "@/todo.types";
import axios from "axios";

const PROXY = 'http://localhost:8000'

export async function getTodos() {
    try {
        const response = await axios.get(`${PROXY}/api/todos/`);
        return response.data as Todo[];
      } catch (err) {
        console.error(err);
        return [] as Todo[];
      }
}

export async function udpateTodo(todo: Todo) {
   const res = await axios
    .put(`${PROXY}/api/todos/${todo.id}/`, todo)
    return res
}

export async function createTodo(todo: Todo) {
    const res = await axios
    .post(`${PROXY}/api/todos/${todo.id}/`, todo)
    return res
}

export async function deleteTodo(todo: Todo) {
    const res = await axios
    .delete(`${PROXY}/api/todos/${todo.id}`)
    return res
}