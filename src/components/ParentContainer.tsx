import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

type ParentContainerProps = {
  children: ReactNode;
};

const ParentContainer = ({ children }: ParentContainerProps) => {
  return (
    <Container className="mb-5 shadow bg-body-tertiary rounded">
      {children}
    </Container>
  );
};

export default ParentContainer;
