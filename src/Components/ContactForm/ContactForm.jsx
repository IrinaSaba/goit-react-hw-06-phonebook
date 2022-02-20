import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import {addContact} from '../../redux/contacts-actions'
// import actions from './contacts-actions';

export default function ContactForm() {
  const  [name, setName] = useState("");
  const  [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const handleChange = event => {
    const {name, value} = event.target;
    switch(name) {
      case "name" :
        setName(value)
        break;
      case "number" :
        setNumber(value)
        break;
    }
  }
   const clearFilds = () => {
    setName('');
    setNumber('');
   }

   const  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      // id: nanoid(),
      name,
      number
    };
    console.log(newContact)
    if (items.find(contact =>contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
      clearFilds();
          return alert(`${newContact.name} is already in contacts`);
        }
    console.log(addContact(newContact))
    dispatch(addContact(newContact));
    clearFilds();

  };
  
  return (
      <form  onSubmit={handleSubmit}>
      <label >
            <input
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               value={name}
               onChange={handleChange}
            />
      </label>
      <br></br>
      <label>
      <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            />
      </label>
      <br></br>
      <button type="submit">
         Add Contact
      </button>
      </form>
   
);
  }

 