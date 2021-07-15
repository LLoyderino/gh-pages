import React from "react";
import { PageProps } from "gatsby";
import { Container, Col } from "react-bootstrap";

import "../styles/main.scss";

const NotFoundPage: React.FC<PageProps> = (props) => (
  <Container fluid>
    <Col className={"h-100 d-inline-block"}>
      <h1>404</h1>
      <p>{`Page "${props.path}" not found`}</p>
    </Col>
  </Container>
);

export default NotFoundPage;
