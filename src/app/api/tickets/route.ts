import { Props } from "@/features/AddTicketsToDB/AddTicketsToDB";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const { title, description, priority }: Props = await req.json();
  if (!userId) return NextResponse.json("User not found!");
  await prisma.ticket.create({
    data: {
      title,
      description,
      status: "open",
      priority,
      userId,
    },
  });

  return NextResponse.json("Ticket added to DB!");
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  let userEmail: string | undefined = undefined;

  if (email) {
    userEmail = email;
  }

  const tickets = await prisma.ticket.findMany({
    where: {
      user: {
        email: userEmail,
      },
    },
  });
  tickets.sort((a, b) => {
    if (a.priority === "HIGH" && b.priority !== "HIGH") {
      return -1;
    }
    if (a.priority === "MEDIUM" && b.priority === "LOW") {
      return -1;
    }
    if (
      (a.priority === "LOW" && b.priority === "MEDIUM") ||
      b.priority === "HIGH"
    ) {
      return 1;
    }
    return 0;
  });
  return NextResponse.json(tickets);
}

export async function PUT(req: Request) {
  const { searchParams, pathname } = new URL(req.url);
  const id = searchParams.get("id");
  const { title, description, priority } = await req.json();

  await prisma.ticket.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      description,
      priority,
    },
  });
  return NextResponse.json("Done");
}
