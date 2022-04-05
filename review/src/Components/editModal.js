import useState, { useEffect } from "react"
import {Button} from "react-bootstrap"
import { Modal, Form } from "react-bootstrap";

function EditModal(props){
  const handleSubmit = ()=>{
      console.log("submitted")
  }
    return(
        <div className="modal">
            <Modal
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
                  <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control  placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="Code" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="Author" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="ISBN" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="Publisher" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Control placeholder="Published On" />
                    </Form.Group>
                    <Button className="button-style" onClick={handleSubmit}>Save</Button>
                  </Form>
                  </Modal.Body>
          </Modal>
        </div>
    );
};

export default EditModal;