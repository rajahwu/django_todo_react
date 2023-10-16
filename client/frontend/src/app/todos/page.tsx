import { TodoList } from "@/components";
import axios from "axios";

export default async function Page() {
    const request = await axios("http://localhost:3000/todos/api")
    const todos = await request.data
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