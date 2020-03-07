import React, { Fragment, useState } from "react";

import GameMenu from "./components/GameMenu";
import TicTacToe from "./games/tic-tac-toe";

function App() {
  const initialMode = "single";
  const [mode, setMode] = useState(initialMode);
  const changeMode = newMode => {
    setMode(newMode);
  };
  return (
    <Fragment>
      <GameMenu changeMode={changeMode} />
      <TicTacToe mode={mode} />
    </Fragment>
  );
}

export default App;
