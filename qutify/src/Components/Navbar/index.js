import Button from "../Button";
import SearchBox from "../SearchBox";
import './Navbar.css' 
export default () => {

    return (<div className="navbar">
        <img src="logo.png"/>
        
        <SearchBox />
        <Button>Give FeedBack</Button>
    </div>)
}