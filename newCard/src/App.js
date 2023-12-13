import Navbar from './Componets/Navbar';
import Card from './Componets/Card';
import './App.css';
import API from './Componets/API';

function App() {
  // const data = {
  //   title: "Mercedes-benz",
  //   link: "https://th.bing.com/th?id=OIP.UCxthHissS16WQb5jc2RGQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  //   des: " A-Class: A class can be Subcompact luxury Hatchback, Sedan/Saloon. The first generation A class was introduced in the year 1997 and it has four generations now. It was a subcompact in its first two generations"
  // }
  // const data1 = {
  //   title: "Audi R8",
  //   link: "https://th.bing.com/th?id=OIP.KMosWYXn4e6Q9UTEKWvbFwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  //   des: " It was launched in 2006 by Audi AG and is developed and manufactured by its subsidiary Audi Sport GmbH"
  // }
  // const data2 = {
  //   title: "Lamborghini Urus",
  //   link: "https://th.bing.com/th?id=OIP.WYQVl5mwgWAY_uTpm3QR1QHaEm&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  //   des: "The Lamborghini Urus is the first Super Sport Utility Vehicle in the world123. It is a mid-size luxury crossover SUV"
  // }
  return (
    <>
      {/* <Navbar title="Cars" />
      <div className="Cards">
        <Card data={data} />
        <Card data={data1} />
        <Card data={data2} />
      </div> */}
      <API/>
    </>
  );
}

export default App;
