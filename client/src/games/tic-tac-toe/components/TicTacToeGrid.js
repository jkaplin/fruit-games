import React from "react";
import PropTypes from "prop-types";

import { Grid, Image } from "semantic-ui-react";

const TicTacToeGrid = ({ grid, setGrid, settings, game, setGame}) => {
  const handleClick = index => {
    if (game.on && grid[index] === settings.placeholder) {
      const fruit = game.player1Turn ? settings.fruit1 : settings.fruit2;
      setGame({
        ...game,
        player1Turn: !game.player1Turn
      });
      setGrid(
        grid.map((img, i) => {
          if (i === index) {
            return fruit;
          }
          return img;
        })
      );
    }
  };

  const images = grid.map((img, index) => {
    return (
      <Grid.Column key={index}>
        <Image
          src={img}
          onClick={(index) => {
            handleClick(index);
          }}
        />
      </Grid.Column>
    );
  });

  return <Grid columns="3">{images}</Grid>;
};

TicTacToeGrid.propTypes = {
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
};

export default TicTacToeGrid;
