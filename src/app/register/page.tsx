import RegisterForm from "@/components/Register/RegisterForm";
import TicketForm from "@/components/Tickets/TicketAddForm";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Register - NexTicket",
  description: "Ticketing app for the modern web.",
};

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className=" flex flex-col justify-center items-center grow bg-base-200 w-full rounded-2xl mt-2">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
