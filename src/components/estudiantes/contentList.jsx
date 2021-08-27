import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
const Content = (props) => {
  const {
    onChange,
    data: { id, name, age, gender, selected },
  } = props;
  return (
    <Fragment>
      {}
      <label className="estudent new-item">
        {}
        <Card style={{ width: "18rem" }}>
          <input
            className="estudent__state"
            name={id}
            type="checkbox"
            defaultChecked={selected}
            onChange={onChange}
          />
          <Card.Body>
            <Card.Title>Estudiante {name}</Card.Title>
            <Card.Text>
              Info estudiante.<br/>La edad es: {age}.<br/>El genero es: {gender}
            </Card.Text>
          </Card.Body>
        </Card>
      </label>
    </Fragment>
  );
};

export default Content;
