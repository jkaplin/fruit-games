import React, { Fragment } from "react";

import GameMenu from "./components/GameMenu";
import TicTacToe from "./games/tic-tac-toe";

function App() {
  return (
    <Fragment>
      <GameMenu />
      <TicTacToe />
    </Fragment>
  );
}

export default App;
