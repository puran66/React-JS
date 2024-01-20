
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Components/Admin/main';
import View from './Components/Admin/View';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/View/:id' element={<View/>}/>
    </Routes>
  )
}

export default App;
