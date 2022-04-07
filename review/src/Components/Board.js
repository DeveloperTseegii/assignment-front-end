import "../css/Board.css";
import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import { useState } from "react";
import EditModal from "./EditModal";
import { Button, Form, Modal } from "react-bootstrap";

function Board() {
  const [books, setBooks] = useState([]);
  const [deleteBook, setDeleteBook] = useState(false);
  const [comfigDelete, setComfigDelete] = useState(false);
  const [idToDel, setIdToDel] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((data) => data.json(data))
      .then((res) => {
        setBooks(res.data);
      });
  }, [deleteBook]);

  const handleDelete = () => {
    setDeleteBook(false);

    fetch(`http://localhost:3000/api/deleteBooks/id/${idToDel}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((data) => data.json(data))
      .then((res) => {
        console.log(res);
        setDeleteBook(true);
        setComfigDelete(false);
      });
  };
  return (
    <>
      <div className="save-table mt-5 container">
        <div className="table-body p-4">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Publiser</th>
                <th>Publisehed On</th>
              </tr>
            </thead>
            <tbody>
              {books.map((i, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <b>{i.name}</b>
                  </td>
                  <td>{i.code}</td>
                  <td>{i.price}</td>
                  <td>{i.author}</td>
                  <td>{i.isbn}</td>
                  <td>{i.publisher}</td>
                  <td>{i.published_date.slice(0, 10)}</td>
                  <td className="icon">
                    <EditModal data={i} />
                  </td>
                  <td
                    className="icon"
                    onClick={() => {
                      setComfigDelete(true);
                      setIdToDel(i._id);
                    }}
                  >
                    <img src="icons/Vector.png" alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={comfigDelete}
        onHide={() => setComfigDelete(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Та усгахдаа итгэлтэй байна уу?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Button
              className="button-style"
              onClick={handleDelete}
              onHide={() => setComfigDelete(true)}
            >
              Хасах
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Board;
