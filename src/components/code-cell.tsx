import React from "react";

import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import bundle from "../bundler";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");
  const { updateCell } = useActions();

  React.useEffect(() => {
    const timer = setTimeout(async () => {
      const { code, error } = await bundle(cell.content);
      setCode(code);
      setError(error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "calc(100% - 10px)", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <Preview code={code} error={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
