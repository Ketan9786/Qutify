
import { ReactComponent as SearchIcon } from "./Search-icon.svg";
import "./SearchBox.css";
export default ()=>{


    return (
        <form className="search-from">
         <input placeholder="search an album of your choice"/> 
         <button onClick={(event)=>{event.preventDefault();}}>
            <SearchIcon />
         </button>
        </form>
    )
}