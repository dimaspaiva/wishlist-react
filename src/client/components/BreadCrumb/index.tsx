import React from 'react'
import { Crumb } from './styles';

const BreadCrumb = (props: {path: string}) => {
  const steps = props.path.split('/').join(' >.').split('.')

  return <h3 >
    {steps.map((step) => <Crumb>{step}</Crumb>)}
  </h3>
}

export default BreadCrumb;
