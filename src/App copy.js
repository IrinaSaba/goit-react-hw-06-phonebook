import { useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import "./App.scss";

class App {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    if (
      this.state.contacts.find((contact) =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
      // contact.name.toLowerCase() === filter?.toLowerCase()
    );
  };

  removeContact = (id) =>
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChange={this.handleChange}
          filterContact={this.filterContact}
        />
        <ContactList
          // contacts={
          //   this.state.filter ? this.filterContact() : this.state.contacts
          // }
          contacts={this.filterContact()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
