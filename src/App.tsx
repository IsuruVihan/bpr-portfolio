import React, {FC} from 'react';
import './App.scss';
import './assets/styles/main.scss';
import {Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from "./components/nav/NavigationBar";
import Home from "./views/Home";
import SoftVessel from "./views/SoftVessel";
import Sanasto from "./views/Sanasto";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
      <Container className="px-0 app" fluid>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/softvessel">
              <SoftVessel />
            </Route>
            <Route path="/sanasto">
              <Sanasto />
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </Container>
  );
}

export default App;
