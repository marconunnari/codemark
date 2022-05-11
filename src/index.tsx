import ReactDOM from "react-dom/client";

import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(<App />);
