import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const PostsContent = () => {
  const [data, setData] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const methodUrl = "https://jsonplaceholder.typicode.com/posts/";
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false)
  const [postData, setDataPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(postData);
  };

  const fetchDataPersonajes = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPost = async () => {
    var f = {
      title: postData.title,
      body: postData.body,
      userId: postData.userId,
    };
    await axios
      .post(methodUrl, f)
      .then((response) => {
        setData(data.concat(response.data));
        modalInsert();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete=async()=>{
    await axios.delete(`${methodUrl}+${setDataPost.id}`)
    .then(response=>{
      setData(data.filter(postData=>postData.id!==setDataPost.id));
      modalDelete();
    }).catch(error=>{
      console.log(error);
    })
  }

  const modalInsert = () => {
    setModalInsertar(!modalInsertar);
  };

  const modalEdit = () => {
    setModalEditar(!modalEditar);
  };

  const modalDelete = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarModal = (postData, caso) => {
    setDataPost(postData);

    caso === "Editar" ? modalEdit() : modalDelete();
  };

  useEffect(() => {
    fetchDataPersonajes();
  }, []);
  const mapData = () => {
    if (data && data.length > 0) {
      return (
        <>
          <Button
            variant="primary"
            size="lg"
            active
            onClick={() => modalInsert()}
          >
            Crear Post
          </Button>{" "}
          <Row xs={1} md={4} className="g-4">
            {data.map((item) => (
              <Col>
                <Fragment key={item.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Titulo: {item.title}</Card.Title>
                      <Card.Text>
                        Body: {item.body}
                        <br />
                        User: {item.userId}
                      </Card.Text>
                      <Button
                        variant="primary"
                        size="lg"
                        active
                        onClick={()=>seleccionarModal(item, "Editar")}
                      >
                        Actualizar
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="lg"
                        active
                        onClick={()=>seleccionarModal(item, "Eliminar")}
                      >
                        Eliminar
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                </Fragment>
              </Col>
            ))}
          </Row>
          {/* ------Insertar ------- */} 
          <Modal isOpen={modalInsertar}>
            <ModalHeader>Crear Post</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Titulo: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleChange}
                />
                <br />
                <label>Body: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="body"
                  onChange={handleChange}
                />
                <br />
                <label>Usuario Id: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="userId"
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                onClick={() => peticionPost()}
              >
                Insertar
              </button>
              {"   "}
              <button className="btn btn-danger" onClick={() => modalInsert()}>
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          {/* ------Editar -------  
          <Modal isOpen={modalEditar}>
            <ModalHeader>Editar Post</ModalHeader>
            <ModalBody>
              <div className="form-group">
              <label>Titulo: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleChange}
                  value = {postData.title}
                />
                <br />
                <label>Body: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="body"
                  onChange={handleChange}
                  value = {postData.body}
                />
                <br />
                <label>Usuario Id: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="userId"
                  onChange={handleChange}
                  value = {postData.userId}
                />
                <br />
                <label>name: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  value={frameworkSeleccionado && frameworkSeleccionado.name}
                />
                <br />
                <label>descripcion: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  onChange={handleChange}
                  value={
                    frameworkSeleccionado && frameworkSeleccionado.descripcion
                  }
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => peticionPut()}>
                Editar
              </button>
              {"   "}
              <button
                className="btn btn-danger"
                onClick={() => abrirCerrarModalEditar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          {/* ------Eliminar -------  */}
          <Modal isOpen={modalEliminar}>
            <ModalBody>
              ¿Estás seguro que deseas eliminar el Post{" "}
              {postData && postData.title}?
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-danger"
                onClick={() => peticionDelete()}
              >
                Sí
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => modalDelete()}
              >
                No
              </button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  };

  return <div className="container">{mapData()}</div>;
};

export default PostsContent;
