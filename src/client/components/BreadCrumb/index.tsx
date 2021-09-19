import React from "react";
import { Crumb } from "./styles";

const BreadCrumb = (props: { path: string }) => {
  const steps = props.path.split("/");

  return (
    <h3>
      {steps.map((step, index) => (
        <span>
          <Crumb key={step}>{step}</Crumb>
          {index < steps.length - 1 && <Crumb>{">"}</Crumb>}
        </span>
      ))}
    </h3>
  );
};

export default BreadCrumb;
