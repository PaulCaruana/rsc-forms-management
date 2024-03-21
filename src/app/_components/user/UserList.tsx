"use client";

import { serverClient } from "@/app/_trpc/ServerClient";
import { trpc } from "@/app/_trpc/Client";

export default function UserList({
  initialUserList,
}: {
  initialUserList: Awaited<
    ReturnType<(typeof serverClient)["user"]["getUsers"]>
  >;
}) {
  const getUsers = trpc.user.getUsers.useQuery(undefined, {
    initialData: initialUserList,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {getUsers?.data?.map((user) => (
          <div key={user.id} className="flex gap-3 items-center">
            {user.firstName}
          </div>
        ))}
      </div>
    </div>
  );
}
