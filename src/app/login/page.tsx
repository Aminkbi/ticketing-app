import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - NexTicket",
  description: "Ticketing app for the modern web.",
};

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className=" flex flex-col justify-center items-center grow bg-base-200 w-full rounded-2xl mt-2">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
