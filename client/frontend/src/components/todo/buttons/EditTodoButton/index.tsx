"use client"

import { useRouter } from "next/navigation"

export default function EditTodoButton() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {router.push('/todos/edit')}} className="btn btn-info">Edit</button>
        </div>
    )
}
