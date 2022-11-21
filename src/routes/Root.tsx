import {
  Outlet,
  NavLink,
  Form,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { createContact, EditContactProps, getContacts } from "../api/network";

type contactProps = {
  contacts: EditContactProps[];
  q: string;
};

export async function action() {
  const contact = await createContact();
  return redirect(`contacts/${contact.id}/edit`);
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData() as contactProps;

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="w-1/4 h-screen bg-slate-200">
        <div className="flex flex-row justify-center py-5">
          <Form role={"search"}>
            <input
              type="text"
              placeholder="Search"
              name="q"
              id="q"
              className="px-6 py-2 shadow-md rounded-lg"
              defaultValue={q}
            />
          </Form>
          <Form className="ml-2" method="post">
            <button
              type="submit"
              className="px-4 py-2 bg-white shadow-md rounded-lg text-cyan-600"
            >
              New
            </button>
          </Form>
        </div>

        <nav className="flex px-8">
          {Array.isArray(contacts) && contacts.length ? (
            <ul className="w-full">
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className={"py-2 hover:bg-gray-300 rounded-md cursor-pointer"}
                >
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "py-2 bg-blue-500" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <p className="pl-2">
                        {contact.first} {contact.last}
                      </p>
                    ) : (
                      <i>No Name</i>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>No contacts</p>
          )}
        </nav>
      </div>

      {/* details */}
      <div className="w-3/4 h-screen bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
}
