import './App.css';
import Product from './component/products';
import Order from './component/orders';
import StartEditButtonGrid from './component/StartEditButtonGrid';
import Copyright from './component/Copyright'
import { Routes, Route, Link } from 'react-router-dom';

import logo from './assets/images/logo.png'
import { Button ,ButtonGroup} from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const buttons = [
    <Button key="Order"><Link to="/Orders"> Order </Link></Button>,
    <Button key="Product"><Link to="/Product"> Product </Link></Button>,
    <Button key="Copyright"><Link to="/Copyright"> Copyright </Link></Button>,
  ];
  return (
    <div className='container'>
      <div className='left'>
        <img src={logo} className='logo' />
        <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
      </div>
      <div className='content'>
        <div className='header'>
          <div className='header_list flex1'>
            <Link to="/"><i className='bi bi-house' /></Link>
          </div>
          <div className='header_list flex2'>
            <Link to='/Product'><i className="bi bi-person" /></Link>
            <Link to='/Product'><i className="bi bi-github" /></Link>
            <Link to='/StartEditButtonGrid'><i className="bi bi-facebook" /></Link>
            <Link to='/'><i className="bi bi-twitter" /></Link>
          </div>
        </div>
        <div className='body'>
          <Routes>
            <Route path="/Product" element={<Product />} />
            <Route path="/Orders" element={<Order />} />
            <Route path="/Copyright" element={<Copyright />} />
            <Route path="/StartEditButtonGrid" element={<StartEditButtonGrid />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
