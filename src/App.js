import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './FrontEndSite/HomePage/HomePage.css'
import { HomePage } from './FrontEndSite/HomePage/HomePage';
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage}></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
