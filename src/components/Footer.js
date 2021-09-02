import PropTypes from "prop-types";

const Footer = ({ foot }) => {
  return (
    <footer className="footer">
      <h1 className="heading">{foot}</h1>
    </footer>
  );
};

Footer.defaultProps = {
  foot: "",
};
Footer.propTypes = {
  foot: PropTypes.string.isRequired,
};

export default Footer;
