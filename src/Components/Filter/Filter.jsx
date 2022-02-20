import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/contacts-actions'

const Filter = ()  => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
   return (
     <label htmlFor=""> Find contact by name
        <input  
            type="text"   
            value={filter}
            onChange={(event) => dispatch(changeFilter(event))}/>
     </label>
   );
 };
 

 export default Filter;