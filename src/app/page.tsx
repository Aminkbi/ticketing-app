import Tickets from "@/components/Tickets/Tickets";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="container grow flex flex-col justify-between items-center">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">Your Tickets</h1>
      <div className="w-full grow border-dashed border-2 p-4 rounded-2xl bg-base-100">
        <Tickets />
      </div>
    </div>
  );
}
