import localforage from "localforage";
import { matchSorter } from "match-sorter";
import { sortBy } from "sort-by-typescript";

import Axios from "axios";

async function fakeNetworkCall() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

export interface ContactProps {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

export interface EditContactProps extends ContactProps {
  id: string;
  createdAt: number;
}

/** getContacts */
export async function getContacts(query?: string | null) {
  await fakeNetworkCall();
  let contacts = (await localforage.getItem("contacts")) as EditContactProps[];
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

/** createContact */
export async function createContact() {
  await fakeNetworkCall();
  let id = Math.random().toString(36).substring(2, 9);

  let contactObj: EditContactProps = {
    id,
    createdAt: Date.now(),
    first: "",
    last: "",
    avatar: "",
    twitter: "",
    notes: "",
    favorite: false,
  };

  let contactArray = (await getContacts()) as EditContactProps[];
  contactArray.unshift(contactObj);

  await set(contactArray);

  return contactObj;
}

/** getSingleContact */
export async function getSingleContact(id: string) {
  await fakeNetworkCall();
  let contacts = (await localforage.getItem("contacts")) as EditContactProps[];
  let contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
}

/** updating Contact */
export async function updateSingleContact(
  id: string,
  updates: EditContactProps
) {
  await fakeNetworkCall();
  let contacts = (await localforage.getItem("contacts")) as EditContactProps[];
  let contact = contacts.find((contact) => contact.id === id);

  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);

  await set(contacts);
  return contact;
}

/** delete Contact */
export async function deleteContact(id: string) {
  let contacts = (await localforage.getItem("contacts")) as EditContactProps[];
  let index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

/** setting to localStorage */
async function set(contacts: EditContactProps[]) {
  return await localforage.setItem("contacts", contacts);
}
