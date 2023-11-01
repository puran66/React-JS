import './Componets/Background.css'
import './App.css';
import Navbar from './Componets/Navbar';
import { Title, Thought } from './Componets/HeroSection';
import {Feature} from './Componets/Features';
import {About,OverView} from './Componets/About';

function App() {
  return (
    <>
    <div className="hero-1">
      <Navbar />
      <div className="hero">
        <Title title="Powerful Digital Solutions With FlowTech"/>
        <Thought thought="We are team of talented digital marketers"/>
        <Feature/>
      </div>
    </div>
    <div className="hero-2">
      <div className="hero">
        <Title title="Developer Thought"/>
        <Thought thought="“Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.” - Bill Gates"/>
      </div>
    </div>
    <About/>
    <OverView/>
    </>
  )
}

export default App;
