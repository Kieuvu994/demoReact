import './App.css';
import Home from './component/Home';
import Detail from './component/Detail';
import Pay from './component/Pay';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <nav>
        <div className='flexcore'>
          <div className='nav'>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className='bar'>&#9776;</label>
            <ul class="contact-list">
              <li><Link to="/"> Nam  </Link></li>
              <li><Link to="/">  Nữ  </Link></li>
              <li><Link to="/"> Trẻ Em </Link></li>
            </ul>
          </div>
          <div className='mid'>
            LOGIN
          </div>
          <div className='right'>
            <Link to="/pay"> <img src='images/giohang.png' className='vohang'/></Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
