import Modal from "./Modal";
import "../css/Button.css";
import useState from "react"
import {Button} from "react-bootstrap"

function Buttons(){
;
    return(
     <>
        <div className="button mt-3 d-flex justify-content-center">
            <button className="button-style"> + Add Book</button>
        </div>
    </>
    );
}

export default Buttons;