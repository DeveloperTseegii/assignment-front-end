import ShowModal from "./ShowModal";
import "../css/Button.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Buttons() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="button mt-3 d-flex justify-content-center">
        <Button className="button-style" onClick={() => setModalShow(true)}>
          + Add book
        </Button>
      </div>

      <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Buttons;
