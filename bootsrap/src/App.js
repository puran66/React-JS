
import './App.css';
import Navbar from './Components/Admin/Navbar';
import { Routes,Route } from 'react-router-dom';
import Products from './Components/Admin/Products';
import Home from './Components/Admin/Home';
import Products_for_sale from './Components/User/Products';

function App() {
  const role = "admin";

  // console.log(data, "data");

  if (role === "admin") {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar />
        <Products_for_sale/>
      </>
    );
  } else {
    // return <Login />;
  }
}

export default App;
