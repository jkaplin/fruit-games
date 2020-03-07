import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import { Menu, Form, Button, Segment } from "semantic-ui-react";

const TicTacToeSettings = ({ settings, setSettings }) => {
  const initialMenu = { activeItem: "fruits" };
  const [menu, setMenu] = useState(initialMenu);

  const handleItemClick = (e, { name }) =>
    setMenu({ ...menu, activeItem: name });

  return (
    <Fragment>
      <Menu pointing secondary vertical>
        <Menu.Item
          name="fruits"
          active={menu.activeItem === "fruits"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={menu.activeItem === "messages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={menu.activeItem === "friends"}
          onClick={handleItemClick}
        />
      </Menu>
    </Fragment>
  );
};

TicTacToeSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired
};

export default TicTacToeSettings;
