import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App()
{
return (
  <Router>
  <div>
  {/* Navbar */}
  <nav style={{ background: '#eee',padding: '10px'}}>
  <Link to="/" style={{margin: '10px'}}>Home</Link>
  <Link to="/about" style={{margin: '10px'}}>About</Link>
  <Link to="/contact" style={{margin: '10px'}}>Contact</Link>
  </nav>
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<Contact />}/>

  </Routes>
  </div>
  </Router>
);
}
export default App;