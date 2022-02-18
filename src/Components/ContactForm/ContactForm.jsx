import { useState } from "react";
import { nanoid } from 'nanoid'



export default function ContactForm({addContact}) {
  const  [name, setName] = useState("");
  const  [number, setNumber] = useState("");

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

   const  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    
    addContact(newContact);
    
    setName('');
    setNumber('');

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

 