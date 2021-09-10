import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

class personajesList extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.items.map((item) => (
          <label className="personaje new-item">
            <Card style={{ width: "18rem" }}>
              <input
                className="personaje__state"
                name={item.id}
                type="checkbox"
              />
              <Card.Body>
                <Card.Title>Personaje</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.name}
                </Card.Subtitle>
                <Card.Text>
                  Info personaje.
                  <br />
                  La edad es: {item.age}.<br />
                  El genero es: {item.gender}
                  <br />
                  El personaje es:{" "}
                  {item.age >= 18 ? "Mayor de edad" : "Menor de Edad"}
                </Card.Text>
              </Card.Body>
            </Card>
          </label>
        ))}
      </Fragment>
    );
  }
}

export default personajesList;
