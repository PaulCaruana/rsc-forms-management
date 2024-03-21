import { serverClient } from "./_trpc/serverClient";

import TodoList from "./_components/TodoList";
import UserList from "@/app/_components/UserList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await serverClient.todo.getTodos();
  const users = await serverClient.user.getUsers();
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <UserList initialUserList={users} />
      <TodoList initialTodos={todos} />
    </main>
  );
}
