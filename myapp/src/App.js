import './App.css';
import Product from './component/Product';
import Detail from './component/Detail';
import Pay from './component/Pay';
import Copyright from './component/Copyright'
import { Routes, Route, Link } from 'react-router-dom';

import logo from './assets/images/logo.png'
import { Button ,ButtonGroup} from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const buttons = [
    <Button key="Home"><Link to="/Copyright"> Home </Link></Button>,
    <Button key="Order"><Link to="/Copyright"> Order </Link></Button>,
    <Button key="Product"><Link to="/Copyright"> Copyright </Link></Button>,
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
            <Link to='/'><i className="bi bi-facebook" /></Link>
            <Link to='/'><i className="bi bi-twitter" /></Link>
          </div>
        </div>
        <div className='body'>
          <Routes>
            <Route path="/Product" element={<Product />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/Copyright" element={<Copyright />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
