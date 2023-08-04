import TicketForm from "@/components/Tickets/TicketAddForm";

const CreateTicket = () => {
  return (
    <div className=" flex flex-col justify-center items-center grow bg-base-200 w-full rounded-2xl mt-2">
      <h1 className="sm:text-6xl text-3xl font-bold my-4">Add Ticket</h1>
      <TicketForm />
    </div>
  );
};

export default CreateTicket;
