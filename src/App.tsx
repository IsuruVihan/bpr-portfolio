import React, {FC} from 'react';
import './App.scss';
import './assets/styles/main.scss';
import {Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from "./components/nav/NavigationBar";
import Home from "./views/Home";
import SoftVessel from "./views/SoftVessel";
import CommercialLeasing from "./views/CommercialLeasing";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

const App: FC = () => {
  return (
      <Container className="px-0 app" fluid>
        <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <ParticleBackground />
            <Home />
          </Route>
          <Route path="/softvessel">
            <ParticleBackground />
            <SoftVessel />
          </Route>
          <Route path="/commercial-leasing">
            <ParticleBackground />
            <CommercialLeasing />
          </Route>
        </Switch>
        </BrowserRouter>
      </Container>
  );
}

export default App;