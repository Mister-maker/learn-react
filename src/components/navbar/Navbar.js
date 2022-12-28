import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/form">Form</Link>
    </div>
  );
}

export default Navbar;