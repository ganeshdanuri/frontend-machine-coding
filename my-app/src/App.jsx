import { useEffect, useState } from "react";
import ProgressBar from "./components/progress-bar/index";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      setTimeout(() => {
        setPercentage((prev) => prev + 10);
      }, 300);
    }
  }, [percentage]);

  return (
    <div>
      React + Javascript + CSS
      <ProgressBar width={500} percentage={percentage} />
    </div>
  );
}

export default App;
