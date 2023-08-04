import { Ticket } from "@prisma/client";
import TicketCard from "./TicketCards";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const getTickets = async (email: string | undefined | null) => {
  const res = await fetch(`http://localhost:3000/api/tickets/?email=${email}`, {
    cache: "no-cache",
  });
  const tickets = await res.json();
  return tickets;
};

const Tickets = async () => {
  const session = await getServerSession(authOptions);
  const tickets = await getTickets(session?.user?.email);
  return (
    <div className="w-full grid grid-cols-1 text-center gap-6 ">
      {tickets.map((ticket: Ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} className="" />
      ))}
    </div>
  );
};

export default Tickets;
