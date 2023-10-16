import axios from "axios";
import { PROXY } from "../_utils";
import { NextResponse } from "next/server";
import { type Todo } from "@/todo.types";

export async function GET(request: Request) {
  try {
    const response = await axios.get(`${PROXY}/api/todos/`);
    const todos = response.data as Todo[];
    // console.log({todos: todos})
    return NextResponse.json(todos);
  } catch (err) {
    console.error(err);
    return [] as Todo[];
  }
}

export async function POST(request: Request) {
  try {
    // Extract data from the request, or you can pass the data as needed
    const data = { title: "New Todo", description: "This is a new todo", completed: false };

    const response = await axios.post(`${PROXY}/api/todos/`, data);
    
    if (response.status === 201) {
      const newTodo = response.data as Todo;
      return NextResponse.json(newTodo, { status: 201 });
    } else {
      return NextResponse.error();
    }
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}