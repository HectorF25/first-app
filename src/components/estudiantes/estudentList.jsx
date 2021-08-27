import React from "react";
import ContentList from "./contentList";
import { Button } from "react-bootstrap";
const EstudentList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      selected: item.id === name ? checked : item.selected,
    }));
    setList(updateList);
  };
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.selected);
    setList(updateList);
};
  const contlist = list.map((item) => (
    <ContentList key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="content-form">
      {}
      {list.length ? contlist : "No hay estudiantes"}
      {}
      {list.length ? (
        <p>
          <Button variant="outline-primary" onClick={onClickRemoveItem}>
            Eliminar estudiantes seleccionados 
          </Button>
        </p>
      ) : null}
    </div>
  );
};

export default EstudentList;
