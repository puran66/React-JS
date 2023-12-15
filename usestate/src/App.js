
import './App.css';
import { useState } from 'react';

function App() {
    const [val,setVal] = useState({})

    const chnageVal =(e)=>{
      setVal({...val , [e.target.name] : e.target.value})
    }

  return (
    <center>
      <input type="text" name='firstName' placeholder='First Name' onChange={chnageVal}/>
      <input type="text" name='lastName' placeholder='Last Name' onChange={chnageVal}/>

      <h2>{val}</h2>

      <button>Submit</button>
    </center>
  );
}

export default App;
