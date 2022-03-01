import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
            <Route exact path="/" element= {<Home/>} />
            <Route path="/about-us" component= {<About/>} />
            <Route path="/contact-us" element= {<Contact/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
