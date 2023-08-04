import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({
    status: 200,
    ticket,
  });
}
