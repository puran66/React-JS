
import './App.css';
import Navbar from './Componets/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Componets/Home';
import Products from './Componets/Products';
import About from './Componets/About';

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/About" element={<About/>}/>
    </Routes>
    </>
  )
}
  

export default App;
