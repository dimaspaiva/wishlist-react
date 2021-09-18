import React from "react";

import Header from "../Header";
import BreadCrumb from "../BreadCrumb";

const PageContainer: React.FC<{ path: string }> = (props) => {
  const { path, children } = props;

  return (
    <div>
      <Header />
      <div className="content-container">
        <BreadCrumb path={path}/>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
