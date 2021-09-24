import React, { useState, Fragment } from "react";
import { Form, Button } from "react-bootstrap";

const Estuidantes = (props) => {
  const { handleAddItem } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      name,
      age,
      gender,
    });
    setName("");
    setAge("");
    setGender("");
  };
  return (
    <Fragment>
      <div className="content-form">
        <Form onSubmit={handleSubmit}>
          {}
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            {}
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Edad</Form.Label>
            {}
            <Form.Control
              type="number"
              placeholder="Edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Genero</Form.Label>
            {}
            <Form.Control
              type="text"
              placeholder="Genero"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={name && age && gender ? "" : "disabled"}
          >
            Registrar
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Estuidantes;
