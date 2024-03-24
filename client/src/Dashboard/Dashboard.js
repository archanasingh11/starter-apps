import './Signup.js';
import './login.js';
import './Signup.css';
import './login.css';
//import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
         <nav className="nav">
        <ul>
            <li>
            <Link to="/" className='nav-link'>Signup</Link>
            </li>
            <li>
                <Link to="/login" className='nav-link'>Login</Link>
            </li>
        </ul>
    </nav>

    );
}