import PropTypes from "prop-types";

const Filter = ({filter, handleChange}) => {
   return (
     <label htmlFor=""> Find contact by name
        <input  
            type="text"   
            value={filter}
            onChange={handleChange}/>
     </label>
   );
 };
 
 Filter.propTypes = {
   handleChange: PropTypes.func.isRequired,
   filter: PropTypes.string.isRequired,
 };

 export default Filter;