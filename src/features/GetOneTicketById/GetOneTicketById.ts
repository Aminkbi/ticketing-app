export const GetOneTicketById = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/ticket/?id=${id}`,
      {
        cache: "no-cache",
      }
    );
    const res = await response.json();
    if (res.status == 200) {
      return res.ticket;
    }
  } catch (err: any) {
    console.error(err.message);
  }
};
