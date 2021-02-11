import './App.css';
import infoCard from './components/infoCard';
import infoCard2 from './components/infoCard2';
import infoCard3 from './components/infoCard3';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <Router>
      <Route path="/concesiones/c2-39" component={infoCard}/>
      <Route path="/concesiones/c2-92" component={infoCard2}/>
      <Route path="/concesiones/c2-46" component={infoCard3}/>
    </Router>

  );
}

export default App;