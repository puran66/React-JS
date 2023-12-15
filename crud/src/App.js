
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Products' Component={Products}/>
        <Route path='/About' Component={About}/>
      </Routes>
    </>
  )
}

export default App;
