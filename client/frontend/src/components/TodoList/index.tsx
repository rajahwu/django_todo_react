import { type Todo } from "@/todo.types";
import { TodoListItem } from "..";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>is complete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
