import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import PersonajesList from "./personajesFormList";

class PersonajesFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: "", age: "", gender: "" };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div className="content-form">
          <h3>Crea tu propio personaje</h3>
          <Form onSubmit={this.handleSubmit}>
            {}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              {}
              <Form.Control
                type="text"
                placeholder="Nombre"
                onChange={this.handleChangeName}
                value={this.state.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Edad</Form.Label>
              {}
              <Form.Control
                type="number"
                placeholder="Edad"
                onChange={this.handleChangeAge}
                value={this.state.age}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Genero</Form.Label>
              {}
              <Form.Control
                type="text"
                placeholder="Genero"
                onChange={this.handleChangeGender}
                value={this.state.gender}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={
                this.state.name && this.state.age && this.state.gender
                  ? ""
                  : "disabled"
              }
            >
              Registrar #{this.state.items.length + 1}
            </Button>
          </Form>
        </div>
        <div className="content-form">
          <PersonajesList items={this.state.items} />
        </div>
      </Fragment>
    );
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  handleChangeGender(e) {
    this.setState({ gender: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0 && this.state.age.length === 0 && this.state.gender.length === 0) {
      return;
    }
    const newItem = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      name: "",
      age: "",
      gender: "",
    }));
  }
}

export default PersonajesFormClass;
