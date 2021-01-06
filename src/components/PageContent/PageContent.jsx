import React from 'react';
import FormCollaborator from '../FormCollaborator';
import './style.css';

function loadPageContent(content_type) {
  if (content_type === "FormCollaborator") {
    return <FormCollaborator />
  }
}
const PageContent = ({content_type}) => (
  <div className="page-content">
    { loadPageContent(content_type) }
  </div>
);

export default PageContent;
