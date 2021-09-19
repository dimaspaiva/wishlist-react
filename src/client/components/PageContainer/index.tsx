import React from "react";

import Header from "../Header";
import BreadCrumb from "../BreadCrumb";

import { ContentContainer } from "./styles";

const PageContainer: React.FC<{ path: string }> = (props) => {
  const { path, children } = props;

  return (
    <div>
      <Header />
      <ContentContainer className="content-container">
        <BreadCrumb path={path} />
        {children}
      </ContentContainer>
    </div>
  );
};

export default PageContainer;
