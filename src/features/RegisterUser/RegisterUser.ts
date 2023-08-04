import { prisma } from "@/lib/prisma";

interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

export const RegisterUser = async ({
  name,
  email,
  password,
}: RegisterUserProps) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return res.json();
  } catch (err: any) {
    console.error(err.message);
  }
};
