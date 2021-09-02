import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="heading">{title}</h1>
      <Button className="btn" text="Add" />
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
