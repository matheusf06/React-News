import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header';

const News = Loadable({
  loader: () => import('./components/News'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Sport = Loadable({
  loader: () => import('./components/Sport'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Technology = Loadable({
  loader: () => import('./components/Technology'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Health = Loadable({
  loader: () => import('./components/Health'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Science = Loadable({
  loader: () => import('./components/Science'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Business = Loadable({
  loader: () => import('./components/Business'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

const Entertainment = Loadable({
  loader: () => import('./components/Entertainment'),
  loading: () =>
    <div style={{ marginTop: "200px" }}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
});

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
