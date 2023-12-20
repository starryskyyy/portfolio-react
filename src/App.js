import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoMatch from './components/404';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
           {/*<Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NoMatch />} />*/}
       </Routes>
    </>
  );
}

export default App;
