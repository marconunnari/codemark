import ReactDOM from "react-dom/client";

import "bulmaswatch/superhero/bulmaswatch.min.css";

// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
};

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(<App />);
