import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
         <nav className="nav">
        <ul>
            <li>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
            <li>
                <Link to="/signup" className='nav-link'>Signup</Link>
            </li>
            <li>
                <Link to="/login" className='nav-link'>Login</Link>
            </li>
        </ul>
    </nav>

    );
}