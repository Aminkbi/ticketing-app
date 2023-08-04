import TicketEditForm from "@/components/Tickets/TicketEditForm";
import { GetOneTicketById } from "@/features/GetOneTicketById/GetOneTicketById";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect, useParams } from "next/navigation";
import React from "react";
import { MetadataParams } from "../page";
import { Metadata } from "next";

interface EditTicketProps {
  params: {
    id: string;
  };
}
export interface Props {
  id: string;
}
export async function generateMetadata({
  params: { id },
}: MetadataParams): Promise<Metadata> {
  const ticket = await GetOneTicketById(id);
  return {
    title: `${ticket.title} - Edit`,
    description: ticket.description,
  };
}

const EditTicket = async ({ params }: EditTicketProps) => {
  const { id } = params;
  const ticket = await GetOneTicketById(id);
  const session = await getServerSession(authOptions);
  const shouldBeShown = session?.user?.id === ticket.userId;
  if (!shouldBeShown) {
    redirect("/");
  }
  return (
    <div className=" flex flex-col justify-center items-center grow bg-base-300 w-full rounded-2xl mt-2 p-2">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">Edit Ticket</h1>
      <TicketEditForm id={id} ticket={ticket} />
    </div>
  );
};

export default EditTicket;
