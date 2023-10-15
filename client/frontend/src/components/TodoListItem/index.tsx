import { type Todo } from "@/todo.types"

export default function TodoListItem({ todo }: { todo: Todo }) {
    const { id, title, description, completed } = todo
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{completed}</p>
        </div>
    )
}