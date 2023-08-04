export interface Props {
  title: string;
  description: string;
  priority: string;
}

const AddTicketsToDB = async (
  { title, description, priority }: Props,
  e: React.SyntheticEvent
) => {
  e.preventDefault();

  if (title === "" || description === "" || priority === "") {
    alert("Please fill in all fields");
    return;
  }
  if (title.length > 50) {
    alert("Title must be less than 50 characters");
    return;
  }
  if (priority !== "LOW" && priority !== "MEDIUM" && priority !== "HIGH") {
    alert("Priority must be LOW, MEDIUM, or HIGH");
    return;
  }
  const body: Props = { title, description, priority };
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/tickets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err: any) {
    console.error(err.message);
  }
};
export default AddTicketsToDB;
