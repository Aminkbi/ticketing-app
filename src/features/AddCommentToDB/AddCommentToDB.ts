import { Comment } from "@prisma/client";

const AddCommentsToDB = async (
  {
    content,
    ticketId,
  }: {
    content: string;
    ticketId: number;
  },
  e: React.SyntheticEvent
) => {
  e.preventDefault();

  if (content === "") {
    alert("Please fill in all fields");
    return;
  }
  const body = { content, ticketId };
  try {
    const response = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err: any) {
    console.error(err.message);
  }
};

export default AddCommentsToDB;
