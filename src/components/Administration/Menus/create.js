import React from "react";
import FormAdministration from "./form";
import TopBar from '../../Topbar'

export default function Create() {
  return(
    <div>
      <TopBar modCode="M04" />
      <div style={{overflow: "visible"}} className="page-content">
        <FormAdministration />
      </div>
    </div>
  );
}
