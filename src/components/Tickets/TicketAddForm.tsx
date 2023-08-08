"use client";

import AddTicketsToDB from "@/features/AddTicketsToDB/AddTicketsToDB";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-xl">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="input input-bordered input-accent  w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          className="textarea textarea-secondary w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Priority
        </label>
        <select
          className="select select-secondary w-full max-w-xs"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option disabled value="">
            Select Priority
          </option>
          <option value="HIGH">HIGH</option>

          <option value="MEDIUM">MEDIUM</option>

          <option value="LOW">LOW</option>
        </select>
      </div>
      {success && (
        <p className="text-2xl text-green-500"> Ticket Added Sucessfully</p>
      )}
      <button
        onClick={(e) => {
          setSuccess(false);
          startTransition(async () => {
            await AddTicketsToDB({ title, description, priority }, e);
            setSuccess(true);
            router.refresh();
          });
          setTitle("");
          setDescription("");
          setPriority("");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Ticket
      </button>
    </div>
  );
}
