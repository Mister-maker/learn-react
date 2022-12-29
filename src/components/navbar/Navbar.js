import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <>
      <div className='logo'><img src={logo} style={{width: "100px"}} alt="" /></div>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/form'>Form</Link>
      </div>
    </>
  );
}

export default Navbar;