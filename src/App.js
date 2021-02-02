import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';


const App= () => {

    return (
      <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
      </>
    );

}

export default App;