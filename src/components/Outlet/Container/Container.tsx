import React, { ReactNode } from 'react';
import * as classes from './styles';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div css={classes.container}>{children}</div>;
}
