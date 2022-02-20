import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/ContactList/ContactList.jsx';
import Filter from './Components/Filter/Filter.jsx';
import './App.scss';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
