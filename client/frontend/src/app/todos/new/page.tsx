import TodoForm from "@/components/todo/forms"

export default function Page() {
    return (
        <div className="flex flex-col m-5">
        <h1 className="text-xl font-bold">Add Todo</h1>
        <TodoForm />
        </div>
    )
} 