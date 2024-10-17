const Collapse = ({ title, content }) => {
  return (
    <details>
      <summary>{title}</summary>
      <span>{content}</span>
    </details>
  );
};

export default Collapse;
