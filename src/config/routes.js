import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HumanResources from '../components/HumanResources';
import CollaboratorCreate from '../components/HumanResources/Collaborators/create';
import CollaboratorList from '../components/HumanResources/Collaborators';
import CollaboratorDetails from '../components/HumanResources/Collaborators/details';

const Routes = () => (
  <Switch>
    <Route exact path="/recursos_humanos" component={HumanResources} />
    <Route exact path="/recursos_humanos/colaboradores" component={CollaboratorList} />
    <Route exact path="/recursos_humanos/colaboradores/cadastro" component={CollaboratorCreate} />
    <Route exact path="/recursos_humanos/colaboradores/:id" component={CollaboratorDetails} />
  </Switch>
);

export default Routes;
