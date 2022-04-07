import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

function EditModal(props) {
  const [handleModal, setHandleModal] = useState(false);
  const hide = () => setHandleModal(false);
  const [rendered, setRendered] = props.onRender;
  console.log(props.onRender);
  const handleEdit = (e) => {
    e.preventDefault();

    console.log(e.target[0].value);
    fetch(`http://localhost:3000/api/updateBooks/id/${props.data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        code: e.target[1].value,
        price: e.target[2].value,
        author: e.target[3].value,
        isbn: e.target[4].value,
        publisher: e.target[5].value,
        published_date: e.target[6].value,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        hide();
      })
      .finally(() => setRendered(!rendered));
  };
  return (
    <>
      <div onClick={() => setHandleModal(true)}>
        <img src="icons/Edit.png" alt="" />
      </div>
      <div className="modal">
        <Modal
          show={handleModal}
          onHide={hide}
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEdit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  placeholder="name"
                  defaultValue={props.data.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  placeholder="code"
                  defaultValue={props.data.code}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  placeholder="price"
                  defaultValue={props.data.price}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  placeholder="author"
                  defaultValue={props.data.author}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  placeholder="isbn"
                  defaultValue={props.data.isbn}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  placeholder="publisher"
                  defaultValue={props.data.publisher}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="date"
                  placeholder="publisher on"
                  defaultValue={props.data.published_date.slice(0, 10)}
                />
              </Form.Group>
              <Button className="button-style" type="submit">
                Edit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default EditModal;
