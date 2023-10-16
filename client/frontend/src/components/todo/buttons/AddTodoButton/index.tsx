"use client"

import { useRouter } from "next/navigation"

export function AddTodoButton() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {router.push('/todos/new')}} className="btn btn-primary">New</button>
        </div>
    )
}
