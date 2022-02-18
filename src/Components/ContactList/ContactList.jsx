import PropTypes from "prop-types";

const ContactList = ({contacts, removeContact}) => {
   return (
     <ul>
       {contacts.map(({ name, id, number }) => (
      <li key={id}>
         {name} : {number}
         <button onClick={() => removeContact(id)}>Delete</button>
      </li>
       ))}
     </ul>
   );
 };
 
 ContactList.propTypes = {
   contacts: PropTypes.array,
   removeContact: PropTypes.func.isRequired,
 };

 export default ContactList;
 