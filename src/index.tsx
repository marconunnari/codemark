import { createRoot } from "react-dom/client";

import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
