import React from 'react';
import {BrowserRouter as Router, Route, Switch,  Link} from 'react-router-dom';
import { Header } from './components';



function App() {
  return (
    <div>
      <Router>
        <Header/>
    <Switch>
        {/* <Route path ="/" component={Header} /> */}
    </Switch>
  </Router>
    </div>
  );
}

export default App;
