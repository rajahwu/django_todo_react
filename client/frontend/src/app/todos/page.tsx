import { TodoList } from "@/components";
import axios from "axios";

import { type Todo } from "@/todo.types";

export async function getData() {
    try {
        const response = await axios.get("http://localhost:8000/api/todos/");
        return response.data as Todo[];
      } catch (err) {
        console.error(err);
        return [] as Todo[];
      }
}

export default async function Page() {
    const todos = await getData()
    return (
        <div>
          <button className="btn btn-primary">Add todo</button>
          {todos.length > 0 ? (
            <TodoList todos={todos} />
          ) : (
            <span>No todos yet</span>
          )}
        </div>
      );
}