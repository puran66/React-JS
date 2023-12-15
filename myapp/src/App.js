import Navbar from './Componets/Navbar';
import Form from './Componets/Form';
import Card from './Componets/Card';
import './App.css';

function App() {

  const SocialMedia={
    name1:"Github",
    name2:"Instagram"
  }  
  return (
    <>
  <Navbar SocialMedia={SocialMedia} />
  <Form/>
  <Card title="Nature is Beautiful"/>
  </>
  );
}

export default App;
