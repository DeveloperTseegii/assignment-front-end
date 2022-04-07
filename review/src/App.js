import Button from "./Components/Button";
import "../src/css/App.css";
import Board from "./Components/Board";
import { useState } from "react";

function App() {
  const [rendered, setRendered] = useState(false);
  return (
    <div>
      <Board render={[rendered, setRendered]} />
      <Button onRendered={setRendered} />
    </div>
  );
}

export default App;
