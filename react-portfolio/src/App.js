
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
      </Route>
      
      

    </Routes>
  );
}

export default App;
