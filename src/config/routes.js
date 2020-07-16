import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "../config/privateRoutes"

import HumanResources from "../components/HumanResources";
import CollaboratorCreate from "../components/HumanResources/Collaborators/create";
import CollaboratorList from "../components/HumanResources/Collaborators";
import CollaboratorDetails from "../components/HumanResources/Collaborators/details";
import MenusCreate from "../components/Administration/Menus/create";
import Home from "../components/Home"
import Login from "../components/System/Login"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sistema/login" component={Login} />
      <PrivateRoute exact path="/sistema" component={Home} />

      <PrivateRoute exact path="/recursos_humanos" component={HumanResources} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores" component={CollaboratorList} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores/cadastro" component={CollaboratorCreate} />
      <PrivateRoute exact path="/recursos_humanos/colaboradores/:id" component={CollaboratorDetails} />

      <PrivateRoute exact path="/administracao/menus/cadastro" component={MenusCreate} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
