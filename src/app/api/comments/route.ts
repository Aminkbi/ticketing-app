import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface CommentPostProps {
  content: string;
  ticketId: number;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const comments = await prisma.comment.findMany({
    where: {
      ticketId: Number(id),
    },
  });
  return NextResponse.json(comments);
}

export async function POST(req: Request) {
  const { content, ticketId }: CommentPostProps = await req.json();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const comment = await prisma.comment.create({
    data: {
      content,
      ticketId,
      userId,
    },
  });
  return NextResponse.json(comment);
}
