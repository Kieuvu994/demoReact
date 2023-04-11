import './css/style.css';
import Home from './component/Home';
import Detail from './component/Detail';
import Pay from './component/Pay';
import Hearder from './component/Hearder';
import Section from './component/Section';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Hearder className="hearder"></Hearder>
      <Section className='hero'></Section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
