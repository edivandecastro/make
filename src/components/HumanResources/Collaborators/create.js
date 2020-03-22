import React from "react";
import TopBar from '../../Topbar';
import FormCollaborator from '../../FormCollaborator';

const Create = () => (
  <div>
    <TopBar modCode="M01" />
    <div className="page-content">
      <FormCollaborator />
    </div>
  </div>
);

export default Create;
