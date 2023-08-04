import CommentAddForm from "@/components/Comments/CommentAddForm";
import { GetOneTicketById } from "@/features/GetOneTicketById/GetOneTicketById";
import { getTicketComments } from "@/features/GetTicketComments/GetTicketComments";
import { authOptions } from "@/lib/auth";
import { Comment, Ticket } from "@prisma/client";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export interface MetadataParams {
  params: {
    id: string;
  };
}
interface Params {
  id: string;
}
export async function generateMetadata({
  params: { id },
}: MetadataParams): Promise<Metadata> {
  const ticket = await GetOneTicketById(id);
  return {
    title: ticket.title,
    description: ticket.description,
  };
}

const TicketPage = async ({ params }: { params: Params }) => {
  const ticket: Ticket = await GetOneTicketById(params.id);
  const comments = await getTicketComments(params.id);
  const session = await getServerSession(authOptions);
  const shouldBeShown = session?.user?.id === ticket.userId;
  if (!shouldBeShown) {
    redirect("/");
  }
  const renderComments = comments.map((comment: Comment) => (
    <>
      <div className="divider"></div>
      <p className="text-gray-400 text-sm mb-6 ">{comment.content}</p>
    </>
  ));

  const createdAt = new Date(ticket.createdAt).toDateString();

  return (
    <div className="container grow flex flex-col justify-between items-center">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">
        Ticket {ticket.id}
      </h1>
      <div className="w-full grow border-dashed border-2 p-4 rounded-2xl bg-base-100 flex-col flex">
        <div className="bg-base-300 p-4 rounded-lg shadow-md my-4 flex-col flex grow justify-between ">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Issue : {ticket.title}
              <div className="ml-5 badge badge-warning">
                Priority: {ticket.priority}
              </div>
            </h3>
            <span className="capitalize badge badge-info">{ticket.status}</span>
          </div>
          <div className="text-justify grow flex flex-col justify-between ">
            <p className="text-gray-100 text-lg mt-6 grow">
              {ticket.description}
            </p>
            <div className="mt-10">{renderComments}</div>
            <CommentAddForm ticketId={ticket.id} />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Link href={`/tickets/${ticket.id}/edit`}>
              <button className="btn btn-primary">Edit Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
