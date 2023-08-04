"use client";

import EditTicketsInDB from "@/features/EditTicketsInDB/EditTicketsInDB";
import { Ticket } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function TicketEditForm({
  id,
  ticket,
}: {
  id: string;
  ticket: Ticket;
}) {
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [priority, setPriority] = useState(ticket.priority);
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

      <button
        onClick={(e) => {
          EditTicketsInDB({ title, description, priority, id }, e);
          router.refresh();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Edit Ticket
      </button>
    </div>
  );
}
