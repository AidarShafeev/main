import './App.css';
import {NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import { Footer } from './components/Footer';
import { Certificates } from './components/Certificates';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Certificates />
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;
