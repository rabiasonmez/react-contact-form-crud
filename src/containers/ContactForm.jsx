import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { RsControl, RsButton, RsForm } from "../components/FormElements";
import ContactData from "./ContactData";

const ContactForm = props => {
  const initialState = {
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!isUpdate) {
      setData([...data, formData]);
    } else {
      Object.entries(formData).map(
        ([key, value]) => (data[formData.id][key] = value)
      );
      setIsUpdate(false);
    }
    setFormData(initialState);
  };
  const handleUpdate = event => {
    const id = parseInt(event.target.id);
    setFormData({ ...data[id], id: id });
    setIsUpdate(true);
    console.log(isUpdate);
  };
  const handleDelete = event => {
    const id = parseInt(event.target.id);
    console.log(id);
    setData(data.filter((item, index) => index !== id));
  };

  return (
    <Container>
      <Card className={"my-4"}>
        <Card.Header>Contact Form</Card.Header>
        <Card.Body>
          <RsForm onSubmit={handleSubmit}>
            <RsControl
              label="Name"
              type="text"
              placeholder="Enter your name"
              isRequired={true}
              value={formData.name}
              name={"name"}
              onChange={handleChange}
            />
            <RsControl
              label="Surname"
              type="text"
              placeholder="Enter your surname"
              isRequired={true}
              value={formData.surname}
              name={"surname"}
              onChange={handleChange}
            />
            <RsControl
              label="Email"
              type="email"
              placeholder="Enter your email"
              isRequired={true}
              value={formData.email}
              name={"email"}
              onChange={handleChange}
            />
            <RsControl
              label="Phone"
              type="text"
              placeholder="Enter your phone"
              isRequired={true}
              value={formData.phone}
              name={"phone"}
              onChange={handleChange}
            />
            <RsControl
              label="Subject"
              type="text"
              placeholder="Enter subject"
              isRequired={true}
              colSize={8}
              value={formData.subject}
              name={"subject"}
              onChange={handleChange}
            />
            <RsControl
              label="Message"
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              isRequired={true}
              colSize={12}
              value={formData.message}
              name={"message"}
              onChange={handleChange}
            />
            <RsButton
              value={isUpdate ? "Update" : "Add"}
              size={"md"}
              type={"submit"}
              variant={"danger"}
            />
          </RsForm>
        </Card.Body>
      </Card>
      <ContactData
        data={data}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </Container>
  );
};
export default ContactForm;
