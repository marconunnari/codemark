import React from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";

import bundle from "../bundler";

const CodeCell = () => {
  const [input, setInput] = React.useState("");
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(async () => {
      const bundledCode = await bundle(input);
      setCode(bundledCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={input}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
