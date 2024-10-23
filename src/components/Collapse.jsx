import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  return (
    <details>
      <summary>{title}</summary>
      <span>{content}</span>
    </details>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Collapse;
