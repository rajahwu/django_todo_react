import { type Todo } from "@/todo.types"

export function TodoListItemButtons() {
    return (
        <div>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-error">Delete</button>
        </div>
    )
}

export default function TodoListItem({ todo }: { todo: Todo }) {
    const { id, title, description, completed } = todo
    return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{completed ? "checked" : "not checked"}</td>
                <td><TodoListItemButtons /></td>
            </tr>
    )
}