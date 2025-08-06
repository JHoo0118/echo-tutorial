"use client";

import { api } from "@workspace/backend/_generated/api";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const add = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <SignOutButton />
          <Button onClick={() => add({ name: "hello" })}>Add</Button>
          <div className="max-w-sm w-full mx-auto">
            {users?.map((user) => <p key={user._id}>{user.name}</p>)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in</p>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
