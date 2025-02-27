import "./index.css";

const ProgressBar = ({ width, percentage }) => {
  return (
    <div className="progress-bar" style={{ width: `${width ? width : 300}px` }}>
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
