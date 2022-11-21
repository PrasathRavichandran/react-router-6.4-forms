import { useLoaderData, Form, Outlet } from "react-router-dom";
import { getSingleContact, EditContactProps } from "../api/network";

export async function loader({ params }: any) {
  return getSingleContact(params.contactId);
}

export default function Contact() {
  const contact = useLoaderData() as EditContactProps;

  return (
    <div className="flex flex-row items-center p-10">
      <div className="w-1/6">
        <img
          key={contact.avatar}
          src={contact.avatar}
          className={"border shadow rounded-2xl"}
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
          <Form action="edit">
            <button className="px-4 py-2 bg-white shadow-md rounded-lg text-cyan-600 border">
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            className="ml-2"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="px-4 py-2 bg-white shadow-md rounded-lg text-red-600 border">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
