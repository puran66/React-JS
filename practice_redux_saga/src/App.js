import './App.css';
import { Main, NavbarAdmin } from './Components/Admin/Admin';
import { NavbarUser } from './Components/User/User';

function App() {
  const role = "Admin";

  // console.log(data, "data");

  if (role === "Admin") {
    return (
      <>
      <NavbarAdmin/>
      <Main/>
      </>
    );
  } else if (role === "User") {
    return (
      <>
      <NavbarUser/>
      </>
    );
  } else {
    // return <Login />;
  }
}

export default App;
