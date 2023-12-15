import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import './App.css';
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Features from './Navbar/Features'
import Home from './Navbar/Home'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Features' element={<Features/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
