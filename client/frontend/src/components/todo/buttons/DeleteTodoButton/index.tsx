"use client"

import { useRouter } from "next/navigation"

export default function DeleteTodoButton() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => {router.push('/todos/delete')}} className="btn btn-error">Delete</button>
        </div>
    )
}
