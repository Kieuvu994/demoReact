import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import News from './component/news';
import Contact from './component/contact';
import {Routes, Route , Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <nav>
        <ul>
          <li>
            <Link to="/">
            <button class="custom-btn btn-11">Home Page <div class="dot"></div></button>
            </Link>
          </li>
          <li>
            <Link to="/news">
            <button class="custom-btn btn-7">News <div class="dot"></div></button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
