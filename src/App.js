import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import News from './components/News';
import Sport from './components/Sport';
import Technology from './components/Technology';
import Health from './components/Health';
import Science from './components/Science';
import Business from './components/Business';
import Entertainment from './components/Entertainment';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <Container>
      <Row style={{'display': 'flex', 'justifyContent': 'center'}}>
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
      </Row>
    </Container>
    );
  }
}

export default App;
