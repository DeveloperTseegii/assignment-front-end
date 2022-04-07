import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

function ShowModal(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/createBooks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        code: e.target[1].value,
        price: e.target[2].value,
        author: e.target[3].value,
        isbn: e.target[4].value,
        publisher: e.target[5].value,
        publishedOn: e.target[6].value,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="modal">
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="Code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="Author" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="number" placeholder="ISBN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="Publisher" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="date" placeholder="Published On" />
            </Form.Group>
            <Button className="button-style" type="submit">
              Ном нэмэх
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ShowModal;
