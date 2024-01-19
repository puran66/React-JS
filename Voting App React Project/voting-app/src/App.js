import './App.css';
import Login from './Components/Pages/Login Page/Login';
import Login_with_number from './Components/Pages/Login Page/Login-with-Number';
import Registration from './Components/Pages/Registration Page/Registration';
import Otp from './Components/Pages/Verify Otp Page/Otp';

function App() {
  return (
    <>
      <Login />
      <Login_with_number/>
      <Registration/>
      <Otp/>
    </>
  );
}

export default App;
