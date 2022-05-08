import React from 'react';
import {BrowserRouter as Router, Route, Switch,  Link} from 'react-router-dom';
import { Header } from './components';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <Router>
        <Header/>
    <Switch>
        <Route path ="/" component={Home} />
    </Switch>
  </Router>
    </div>
  );
}

export default App;
