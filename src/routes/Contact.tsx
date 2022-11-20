export interface ContactProps {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
  id?: string;
}

const contact: ContactProps = {
  first: "Your",
  last: "Name",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "your_handle",
  notes: "Some notes",
  favorite: true,
};

export default function Contact() {
  return (
    <div className="flex flex-row items-center">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar}
          className={"rounded-2xl"}
        />
      </div>

      <div className="px-5">
        <h1 className="text-2xl font-semibold">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>

        {contact.twitter && (
          <p className="text-base text-blue-400">
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p className="text-base">{contact.notes}</p>}
        <div className="flex flex-row mt-4">
          <form>
            <button className="px-4 py-2 bg-white shadow-md rounded-lg text-cyan-600 border">
              Edit
            </button>
          </form>
          <form className="ml-2">
            <button className="px-4 py-2 bg-white shadow-md rounded-lg text-red-600 border">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
