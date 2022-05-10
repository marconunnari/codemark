import React from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";

const CodeCell = () => {
  const [input, setInput] = React.useState("");
  const [code, setCode] = React.useState("");

  const onSubmit = async () => {
    const bundledCode = await bundle(input);
    setCode(bundledCode);
  };

  return (
    <div>
      <CodeEditor initialValue={input} onChange={(value) => setInput(value)} />
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
