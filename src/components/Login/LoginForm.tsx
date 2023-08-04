"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-xl">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="input input-bordered input-accent  w-full"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="input input-bordered input-accent  w-full"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        onClick={(e) => {
          signIn("credentials", { email: email, password: password });
        }}
        className="btn btn-primary "
      >
        Login
      </button>
      <p className="text-xl font-semibold mt-6 text-gray-900">
        {" "}
        Not registered?{" "}
        <Link href={"/register"} className="badge-secondary badge-md badge">
          Sign up now
        </Link>
      </p>
    </div>
  );
}
