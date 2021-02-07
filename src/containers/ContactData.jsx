import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import { AccordionBody, AccordionContainer } from "../components/Accordion";
import { RsButton } from "../components/FormElements";

const ContactData = props => {
  return (
    <AccordionContainer>
      {props.data.map((item, index) => (
        <AccordionBody
          key={index}
          eventKey={index}
          data={item}
          title={`${item.name} ${item.surname}`}
        >
          <Col sm={10} className={"p-3"}>
            <ListGroup>
              {Object.entries(item).map(([key, value]) => (
                <ListGroup.Item>
                  <strong>{key} : </strong>
                  {value}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={2}>
            <Row>
              <RsButton
                value={"Update"}
                size={"sm"}
                variant={"primary"}
                onClick={props.handleUpdate}
                id={index}
              />
              <RsButton
                value={"Delete"}
                size={"sm"}
                variant={"danger"}
                onClick={props.handleDelete}
                id={index}
              />
            </Row>
          </Col>
        </AccordionBody>
      ))}
    </AccordionContainer>
  );
};
export default ContactData;
