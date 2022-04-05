import "../css/Board.css";
import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import { useState } from "react";
import EditModal from "./editModal";

function Board() {
  const [books, setBooks] = useState([]);
  const [deleteBook, setDeleteBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/books", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json(data))
      .then((res) => {
        setBooks(res.data);
      });
  }, [deleteBook]);
  const handleDelete = (del) => {
    console.log(del);
    fetch(`http://localhost:3000/api/deleteBooks/id/${del}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json(data))
      .then((res) => {
        console.log("-------------" + res);
        setDeleteBook(res.data);
      });
  };
  const handleEdit = (edit) => {
    console.log(edit);
  };
  return (
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
                <td className="icon" onClick={() => handleEdit(i._id)}>
                  <img src="icons/Edit.png" alt="" />
                </td>
                <td className="icon" onClick={() => handleDelete(i._id)}>
                  <img src="icons/Vector.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Board;
