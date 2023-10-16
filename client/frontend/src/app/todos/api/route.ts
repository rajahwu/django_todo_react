import axios from "axios";
import { PROXY } from "../_utils";
import { NextRequest, NextResponse } from "next/server";
import { type Todo } from "@/todo.types";

export async function GET(request: Request) {
  try {
    const response = await axios.get(`${PROXY}/api/todos/`);
    const todos = response.data as Todo[];
    console.log({todos: todos})
    return NextResponse.json(todos);
  } catch (err) {
    console.error(err);
    return [] as Todo[];
  }
}
