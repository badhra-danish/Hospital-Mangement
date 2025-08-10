import React from "react";
import "../../../assets/css/client/utils/pagehead.css";
function PageHead({ pagename, pageheadline, pageinfo }) {
  return (
    <div className="page-head-main-container">
      <div className="page-head">
        <h5> {pagename}</h5>
        <h3>{pageheadline}</h3>
        <div className="info">
          <p>{pageinfo}</p>
        </div>
      </div>
    </div>
  );
}

export default PageHead;
