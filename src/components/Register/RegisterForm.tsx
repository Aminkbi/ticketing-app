"use client";

import { RegisterUser } from "@/features/RegisterUser/RegisterUser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const router = useRouter();

  let disabled = false;
  if (password !== repeatedPassword || password.length < 8) {
    disabled = true;
  }
  return (
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-xl">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="input input-bordered input-accent  w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Repeat Password
        </label>
        <input
          className="input input-bordered input-accent  w-full"
          value={repeatedPassword}
          type="password"
          onChange={(e) => setRepeatedPassword(e.target.value)}
          required
        />
      </div>

      <button
        disabled={disabled}
        onClick={(e) => {
          RegisterUser({ name, email, password });
          setName("");
          setEmail("");
          setPassword("");
          setRepeatedPassword("");

          router.refresh();
        }}
        className="btn btn-primary "
      >
        Register
      </button>
    </div>
  );
}
