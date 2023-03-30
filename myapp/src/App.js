import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import News from './component/news';
import Contact from './component/contact';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <nav>
        <div id="menu" className='nav'>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">&#9776;</label>

          <div className='multi-level'>
            <ul className="item">
              <li><Link to="/">
              Home page
              </Link>
              </li>
              <li><Link to="/news">
                News
              </Link></li>
              <li><Link to="/contact">
                Contact
              </Link></li>
            </ul>
            </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
