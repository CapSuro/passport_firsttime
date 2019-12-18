import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './FrontEndSite/HomePage/HomePage.css'
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import { Entry } from './FrontEndSite/EntryPage/Entry';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Entry}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
