
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { useLocation } from 'react-router-dom';



function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Home/>}></Route>
          {/*<Route exact path= 'about' element = {<About/>}></Route>*/}
          <Route exact path = 'resume' element = {<Resume/>}></Route>
          <Route exact path = 'projects' element = {<Projects/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>

  );
}

export default App;
