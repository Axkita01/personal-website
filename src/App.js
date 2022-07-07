
import './App.css';
import About from './Pages/About.jsx'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Home/>}></Route>
          <Route exact path= 'about' element = {<About/>}></Route>
          <Route exact path = 'resume' element = {<Resume/>}></Route>
          <Route exact path = 'projects' element = {<Projects/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
