import { type Todo } from "@/todo.types";
import { createTodo } from "@/app/todos/_utils";

export default function TodoForm() {
  async function create(formData: FormData) {
    "use server";

    const payload: Todo = {
      "title": "",
      "description": "",
      "completed": false
    };

    console.log("TodoForm formData: ", formData);
    
    formData.forEach((value: FormDataEntryValue, key: string) => {
      if (
        typeof value === "string" &&
        (key === "title" || key === "description")
        ) {
          payload[key] = value;
        }
      });
      
    console.log("TodoForm payload: ", payload);
    const todo = await createTodo(payload)
    console.log("created todo", todo)
    return todo
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={create}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo-title" name="title" type="text" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">description</label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="todo-description" type="text" name="description" />
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label htmlFor="completed" className="md:w-2/3 block text-gray-500 font-bold">
            <input id="completed" value="" type="checkbox" className="mr-2 leading-tight" />
            <span className="text-sm">
              is completed
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <input type="submit" value="submit" className="shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounde" />
          </div>
        </div>
      </form>
    </div>
  );
}
