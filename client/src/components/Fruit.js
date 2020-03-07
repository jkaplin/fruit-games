import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

import { Image } from "semantic-ui-react";

const Fruit = ({ fruit, onClick }) => {
  return (
    <ReactSVG
      src={`http://localhost:3000/${fruit.svg}`}
      beforeInjection={svg => {
        svg.setAttribute("fill", "green");
        svg.setAttribute("fill", "green");
        svg.setAttribute("stroke", "green");
      }}
      onClick={onClick}
    />
  );
};

export default Fruit;
