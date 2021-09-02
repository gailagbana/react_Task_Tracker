import PropTypes from "prop-types";
import React from "react";

function button({ color, text }) {
  const onClick = () => {
    console.log("Hi");
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

button.defaultProps = {
  color: "blue",
  text: "Register",
};
button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default button;
