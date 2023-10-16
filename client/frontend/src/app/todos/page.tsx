import { TodoList } from "@/components";
import axios from "axios";

import { AddTodoButton } from "@/components/todo/buttons/AddTodoButton";

export default async function Page() {
    const request = await axios("http://localhost:3000/todos/api")
    const todos = await request.data
    return (
        <div>
          <AddTodoButton />
          {todos.length > 0 ? (
            <TodoList todos={todos} />
          ) : (
            <span>No todos yet</span>
          )}
        </div>
      );
}