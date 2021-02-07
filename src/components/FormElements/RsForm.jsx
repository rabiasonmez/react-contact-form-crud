import React from "react";
import { Form, Row } from "react-bootstrap";

const RsForm = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Row>{...props.children}</Row>
    </Form>
  );
};
export default RsForm;
