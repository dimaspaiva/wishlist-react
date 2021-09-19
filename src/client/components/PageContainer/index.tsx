import React from "react";

import Header from "../Header";
import BreadCrumb from "../BreadCrumb";

import { ContentContainer } from "./styles";

const PageContainer: React.FC<{
  path: string;
  setSearchTerm: (term: string) => void;
}> = (props) => {
  const { path, setSearchTerm, children } = props;

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <ContentContainer className="content-container">
        <BreadCrumb path={path} />
        {children}
      </ContentContainer>
    </div>
  );
};

export default PageContainer;
