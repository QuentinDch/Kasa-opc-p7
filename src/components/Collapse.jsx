import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  return (
    <details>
      <summary>{title}</summary>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <span>{content}</span>
      )}
    </details>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Collapse;
