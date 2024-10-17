import data from "../../data/collapse.json";
import Collapse from "../../components/Collapse";

const Display = () => {
  return (
    <div className="display">
      {data.map((collapse) => (
        <Collapse
          key={collapse.id}
          title={collapse.title}
          content={collapse.content}
        />
      ))}
    </div>
  );
};

export default Display;
