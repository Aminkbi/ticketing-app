"use server";

interface Props {
  title: string;
  description: string;
  priority: string;
  id: string;
}
interface bodyProps {
  title: string;
  description: string;
  priority: string;
}

const EditTicketsInDB = async (
  { title, description, priority, id }: Props,
  e: React.SyntheticEvent
) => {
  e.preventDefault();
  const body: bodyProps = { title, description, priority };
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/tickets/?id=${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    return response;
  } catch (err: any) {
    console.error(err.message);
  }
};
export default EditTicketsInDB;
