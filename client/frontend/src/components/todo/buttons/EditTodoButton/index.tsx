"use client"

import { useRouter } from "next/navigation"

export default function EditTodoButton() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {router.push('/todos/edit')}} className="btn btn-info relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">Edit</button>
        </div>
    )
}
