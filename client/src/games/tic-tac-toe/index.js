import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import TicTacToeSettings from "./components/TicTacToeSettings";
import TicTacToeGrid from "./components/TicTacToeGrid";

import fruitTree from "../../img/fruit-tree.svg";
import apple1 from "../../img/shiny-apple.svg";
import apple2 from "../../img/apple-core.svg";

const TicTacToe = props => {
  const initialSettings = {
    mode: "single",
    placeholder: fruitTree,
    fruit1: apple1,
    fruit2: apple2
  };
  const [settings, setSettings] = useState(initialSettings);

  const initialGame = {
    menu: true,
    on: true,
    player1Turn: true
  };

  const [game, setGame] = useState(initialGame);

  const initialGrid = [
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder,
    settings.placeholder
  ];

  const [grid, setGrid] = useState(initialGrid);

  const checkWin = grid => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const win of wins) {
      if (
        grid[win[0]] !== settings.placeholder &&
        grid[win[0]] === grid[win[1]] &&
        grid[win[0]] === grid[win[2]]
      ) {
        return grid[win[0]] === settings.fruit1 ? "Player 1" : "Player 2";
      }
    }
    return "No Winner";
  };

  useEffect(() => {
    setGame(initialGame);
    setGrid(initialGrid);
  }, [settings, props.mode]);

  useEffect(() => {
    const winnerString = checkWin(grid);
    if (winnerString !== "No Winner") {
      setGame({
        ...game,
        winner: winnerString
      });
      setGame({
        ...game,
        on: false
      });
    }
  }, [grid]);

  return (
    <Fragment>
      <TicTacToeGrid
        grid={grid}
        setGrid={setGrid}
        settings={settings}
        game={game}
        setGame={setGame}
      />
    </Fragment>
  );
};

TicTacToe.propTypes = {};

export default TicTacToe;
