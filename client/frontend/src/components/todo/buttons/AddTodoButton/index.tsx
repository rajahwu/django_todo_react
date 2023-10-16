"use client"

import { useRouter } from "next/navigation"

export function AddTodoButton() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {router.push('/todos/new')}} className="btn btn-success relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">+ add todo</button>
        </div>
    )
}
