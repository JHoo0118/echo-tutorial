"use client";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const add = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p>
      <Button onClick={() => add({ name: "hello1" })}>Add</Button>
      <div className="max-w-sm w-full mx-auto">
        {users?.map((user) => <p key={user._id}>{user.name}</p>)}
      </div>
    </div>
  );
}
