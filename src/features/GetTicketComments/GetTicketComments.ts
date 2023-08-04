export async function getTicketComments(ticketId: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/comments/?id=${ticketId}`,
      {
        cache: "no-cache",
      }
    );
    const res = await response.json();
    return res;
  } catch (err: any) {
    console.error(err.message);
  }
}
