import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import { Menu, Form, Button, Segment } from "semantic-ui-react";
import GameSettings from "../games/tic-tac-toe/components/TicTacToeSettings";

const GameMenu = props => {
  const initialMenu = { activeItem: null };
  const [menu, setMenu] = useState(initialMenu);

  const handleItemClick = (e, { name }) => {
    if (name === menu.activeItem) {
      setMenu({ ...menu, activeItem: null });
    } else {
      setMenu({ ...menu, activeItem: name });
    }
  };

  return (
    <Fragment>
      <Menu pointing>
        <Menu.Item header>Settings</Menu.Item>
        <Menu.Item
          name="mode"
          active={menu.activeItem === "mode"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="game"
          active={menu.activeItem === "game"}
          onClick={handleItemClick}
        />
      </Menu>
      {menu.activeItem === "mode" && (
        <Segment>
          <Form>
            <Form.Group>
              <Form.Field>
                <Button
                  onClick={() => props.changeMode("single")}
                  color="red"
                  content="Single-Player"
                  icon="heart"
                  label={{
                    basic: true,
                    color: "red",
                    pointing: "left",
                    content: "1"
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Button
                  onClick={() => props.changeMode("co")}
                  color="green"
                  content="Co-Players"
                  icon="fork"
                  label={{
                    basic: true,
                    color: "green",
                    pointing: "left",
                    content: "2"
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Button
                  onClick={() => props.changeMode("multi")}
                  color="blue"
                  content="Multi-Player"
                  icon="globe"
                  label={{
                    as: "a",
                    basic: true,
                    color: "blue",
                    pointing: "left",
                    content: "2,048"
                  }}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
      )}
      {menu.activeItem === "game" && (
        <Segment>
          <GameSettings />
        </Segment>
      )}
    </Fragment>
  );
};

GameMenu.propTypes = {};

export default GameMenu;
