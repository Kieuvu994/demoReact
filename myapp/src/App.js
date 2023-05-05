import './css/style.css';
import Home from './component/Home';
import Detail from './component/Detail';
import Pay from './component/Pay';
import Header from './component/Header';
import Section from './component/Section';
import Cart from './component/Cart'
import { Routes, Route } from 'react-router-dom';
import React from 'react';
function App() {



  return (
    <div className="App">

      <Header className="header"></Header>
      
      <Section className='hero'></Section>
      {/*<Category className="categories"></Category> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
