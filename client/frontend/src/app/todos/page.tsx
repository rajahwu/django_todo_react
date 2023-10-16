"use client";
import { TodoList } from "@/components";
import { getTodos } from "./_utils";

import { AddTodoButton } from "@/components/todo/buttons/AddTodoButton";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todosData"],
    queryFn: getTodos,
    staleTime: 5 * 1000,
  });

  if(isLoading) return "Loding..."
  if(error) return 'An error has occured ' + error

  const todos = data ?? [];

  return (
    <div>
      <AddTodoButton />
        {todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <span>No todos yet</span>
        )}
    </div>
  );
}
