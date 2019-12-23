import React from 'react';
import 'antd/dist/antd.css';
import './FrontEndSite/HomePage/HomePage.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { BackendEntry } from './BackEndSite/BackEndEntry/BackEndEntry';
import { Entry } from './FrontEndSite/EntryPage/Entry';
import { Provider } from 'react-redux';
import { PassportStore } from './FrontEndSite/PassportStore';

function App() {
  return (
    <div className="App">
      <Provider store={PassportStore}>
        <Router>
          <Switch>
            <Route path="/" component={Entry}></Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

// NOTE: Need Redux here to load data Province, District, Nation and Religion
