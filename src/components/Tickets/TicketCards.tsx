import { prisma } from "@/lib/prisma";
import { Prisma, Ticket } from "@prisma/client";
import Link from "next/link";

interface Props {
  ticket: Ticket;
  className?: string;
}
export default async function TicketCard({ ticket, className }: Props) {
  const createdAt = new Date(ticket.createdAt).toDateString();

  return (
    <div className="bg-base-300 p-4 rounded-lg shadow-md my-4">
      <div className="flex justify-between items-center">
        <div className="flex-col flex gap-3">
          <h3 className="text-2xl font-bold truncate">Title: {ticket.title}</h3>
          <div className="badge badge-warning">Priority: {ticket.priority}</div>
        </div>
        <span className="capitalize badge badge-info">{ticket.status}</span>
      </div>

      <div className="text-gray-500 mt-2 text-center">
        <div>Opened on {createdAt}</div>
      </div>

      <div className="mt-4">
        <p className="text-gray-100 text-lg">
          {" "}
          {ticket.description?.substring(0, 50)}
          {ticket.description.length > 50 ? "..." : ""}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <Link href={`/tickets/${ticket.id}`}>
          <button className="btn btn-secondary">View Ticket</button>
        </Link>
        <Link href={`/tickets/${ticket.id}/edit`}>
          <button className="btn btn-primary">Edit Ticket</button>
        </Link>
      </div>
    </div>
  );
}
