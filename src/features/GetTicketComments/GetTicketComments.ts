export async function getTicketComments(ticketId: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/comments/?id=${ticketId}`,
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
