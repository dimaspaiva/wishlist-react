import React from "react";

import Header from "../Header";

const PageContainer: React.FC<{ title: string }> = (props) => {
  const { title, children } = props;

  return (
    <div>
      <Header />
      <div className="content-container">
        <h1 className="page-title">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
