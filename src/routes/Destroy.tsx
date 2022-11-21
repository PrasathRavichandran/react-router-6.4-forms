import { redirect } from "react-router-dom";
import { deleteContact } from "../api/network";

export async function action({ params }: any) {
  await deleteContact(params.contactId);

  return redirect("/");
}
