import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import images from "../../assets/img";

const imagenes = [
  {
    id: 1,
    title: "Imagen personaje 1",
    img: "1.png",
  },
  {
    id: 2,
    title: "Imagen personaje 1",
    img: "2.png",
  },
  {
    id: 3,
    title: "Imagen personaje 2",
    img: "3.png",
  },
  {
    id: 4,
    title: "Imagen personaje 4",
    img: "4.png",
  },
  {
    id: 5,
    title: "Imagen personaje 5",
    img: "5.png",
  },
  {
    id: 6,
    title: "Imagen personaje 6",
    img: "6.png",
  },
  {
    id: 7,
    title: "Imagen personaje 7",
    img: "7.png",
  },
  {
    id: 8,
    title: "Imagen personaje 8",
    img: "8.png",
  },
  {
    id: 9,
    title: "Imagen personaje 9",
    img: "9.png",
  },
  {
    id: 10,
    title: "Imagen personaje 10",
    img: "10.png",
  },
];

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
        <>
          {data.map((item) => (
            <Fragment key={item.name}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                <MyImages/>
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
          ))}
        </>
      );
    }
  };

  return <div className="container">{mapData()}</div>;
};

const MyImages = () => {
    return (
        <>
            {imagenes.map(item => (
                <img alt="" width="250" src={images[item.img]} key={item.id} />
            ))}
        </>
    );
};

export default PersonajesContent;
