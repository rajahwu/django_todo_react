import { type Todo } from "@/todo.types"

import EditTodoButton from "../buttons/EditTodoButton"
import DeleteTodoButton from "../buttons/DeleteTodoButton"

export function TodoListItemButtonContainer() {
    return (
        <div className="btn-group">
            <EditTodoButton />
            <DeleteTodoButton />
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
                <td><TodoListItemButtonContainer /></td>
            </tr>
    )
}