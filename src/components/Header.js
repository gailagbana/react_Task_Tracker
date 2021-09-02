import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 className="heading">{title}</h1>
      <Button
        color={showAdd ? "red" : "blue"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "TASK TRACKER",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
