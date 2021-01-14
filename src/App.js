import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/index';
import Wrapper from './components/Wrapper/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';



// class App extends Componet {
//   render(){
//     return (
//       <Router>
//       <div>
//         <NavBar />
//         <Wrapper>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/projects" component={Projects} />
//         <Route path="/contact" component={Contact} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//     )
//   }
// }

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Wrapper>
        <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
