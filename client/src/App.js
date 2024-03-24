import './App.css';
import { useNavigate, Route, Routes} from 'react-router-dom';
import Home from './compnents/Home';
import About from './compnents/About';
import Contact from './compnents/Contact';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer';
import Address from './Address';
import Services from './Services';
import Feedback from './Feedback';
import Signup from './Dashboard/Signup';
import Login from './Dashboard/login';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
