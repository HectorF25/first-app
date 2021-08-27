import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import images from "../../assets/img/index";

const PersonajesContent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setData(response?.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapData = () => {
    if (data && data.length > 0) {
      return (
        <Row xs={1} md={4} className="g-4">
        {data.map((item,itemImg) => (
          <Col>
            <Fragment key={item.name}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Img variant="top" src={images[itemImg].img}/>
                  <Card.Title>Nombre {item.name}</Card.Title>
                  <Card.Text>
                    Info Personaje.
                    <br />
                    La edad es: {item.birth_year}.<br />
                    El planeta al que pertenece es: {item.homeworld}
                    <br />
                    El genero es: {item.birth_year}.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fragment>
          </Col>
        ))}
      </Row>
      );
    }
  };

  return <div className="container">{mapData()}</div>;
};

export default PersonajesContent;
