import React from "react";
import PropTypes from "prop-types";

import { Image } from "semantic-ui-react";

const Fruit = ({ fruit, onClick, size = "small" }) => {
  return <Image src={`img/${fruit.img}`} size={size} onClick={onClick} />;
};

Fruit.propTypes = {
  fruit: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string
};

export default Fruit;
