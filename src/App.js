import React, { Component } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import News from "./components/News";

import { Container, Row } from "react-bootstrap";

import "./style.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <HashRouter>
              <Switch>
                <Route
                  exact
                  path="/inicio"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&apiKey=" />
                  )}
                />
                <Route
                  path="/esporte"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=" />
                  )}
                />
                <Route
                  path="/tecnologia"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=" />
                  )}
                />
                <Route
                  path="/saude"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=" />
                  )}
                />
                <Route
                  path="/ciencias"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=" />
                  )}
                />
                <Route
                  path="/negocios"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=" />
                  )}
                />
                <Route
                  path="/entretenimento"
                  component={() => (
                    <News link="https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=" />
                  )}
                />
              </Switch>
            </HashRouter>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
