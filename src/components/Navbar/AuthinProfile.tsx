"use client";

import { log } from "console";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthinProfile = () => {
  const { data: session } = useSession();
  return (
    <li>
      {session?.user && (
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
      )}
      {!session?.user && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
          <Link href="/register">Register</Link>
        </>
      )}
    </li>
  );
};

export default AuthinProfile;
