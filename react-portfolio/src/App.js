
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>

    </Routes>
  );
}

export default App;
