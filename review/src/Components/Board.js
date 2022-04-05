import "../css/Board.css"
import Table from "react-bootstrap/Table"

function Board() {
  return (
    <div className="save-table mt-5 container">
    <div className="table-body p-4">
        <Table striped >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Publiseh</th>
                <th>Publiseh On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td><img src="icons/Edit.png" alt="" /></td>
                <td><img src="icons/Vector.png" alt="" /></td>
              </tr>
            </tbody>
    </Table>
  </div>
  </div>
  );
}

export default Board;
