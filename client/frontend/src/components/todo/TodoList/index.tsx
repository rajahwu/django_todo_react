import { type Todo } from "@/todo.types";
import TodoListItem from "../TodoListItem";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div className="overflow-x-auto card">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>description</th>
            <th></th>
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
