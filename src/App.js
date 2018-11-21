import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import News from './components/News';
import Sport from './components/Sport';
import Technology from './components/Technology';
import Health from './components/Health';
import Science from './components/Science';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={News} />
            <Route path="/sport" component={Sport} />
            <Route path="/technology" component={Technology} />
            <Route path="/health" component={Health} />
            <Route path="/science" component={Science} />
            <Route path="/business" component={Business} />
            <Route path="/entertainment" component={Entertainment} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
