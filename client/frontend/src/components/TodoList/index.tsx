import { type Todo } from "@/todo.types"
import { TodoListItem } from ".."

export default function TodoList({ todos }: { todos: Todo[] }) {
    return (
        <div>
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </div>
    )
}