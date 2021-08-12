import React, {FC} from 'react';
import './App.scss';
import {Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from "./components/nav/NavigationBar";
import Home from "./views/Home";
import SoftVessel from "./views/SoftVessel";
import CommercialLeasing from "./views/CommercialLeasing";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Container className="px-0" fluid>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/softvessel">
            <SoftVessel />
          </Route>
          <Route path="/commercial-leasing">
            <CommercialLeasing />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;