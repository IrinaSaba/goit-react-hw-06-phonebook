import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import "./App.scss";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { name: "Irina", number: +2165445 },
  ]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    if (
      contacts.find((contact) =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts((prev) => [...prev, newContact]);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterContact = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const removeContact = (id) =>
    setContacts((prev) => prev.filter((contact) => contact.id !== id));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={filterContact()} removeContact={removeContact} />
    </div>
  );
}
