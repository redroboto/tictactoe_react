import "./App.css";
import { useState } from "react";
import { Board } from "./Board.jsx";

function Square({ value }, { onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <main>
      <div className="board-container">
        <Board />;
      </div>
    </main>
  );
}

export default App;
