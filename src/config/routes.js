import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "../config/privateRoutes"

import HumanResources from "../components/HumanResources";
import CollaboratorCreate from "../components/HumanResources/Collaborators/create";
import CollaboratorList from "../components/HumanResources/Collaborators";
import CollaboratorDetails from "../components/HumanResources/Collaborators/details";
import MenusCreate from "../components/Administration/Menus/create";
import Home from "../components/Home"
import Login from "../components/System/Login"
import MainContent from '../components/MainContent'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/sistema" component={MainContent(Home)} />

      <PrivateRoute exact path="/recursos_humanos" component={MainContent(HumanResources)} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores" component={MainContent(CollaboratorList)} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores/cadastro" component={MainContent(CollaboratorCreate)} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores/:id" component={MainContent(CollaboratorDetails)} />

      <PrivateRoute exact path="/administracao/menus/cadastro" component={MainContent(MenusCreate)} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
