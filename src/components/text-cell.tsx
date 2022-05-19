import React from "react";
import MDEditor from "@uiw/react-md-editor";

import { Cell } from "../state";
import { useActions } from "../hooks/useActions";

import "./text-cell.css";

interface TextCellProps {
  cell: Cell;
}

const TextCell: React.FC<TextCellProps> = ({ cell }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [editing, setEditing] = React.useState(false);
  const { updateCell } = useActions();

  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setEditing(false);
      }
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-cell" ref={ref}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
      </div>
    );
  }

  return (
    <div className="text-cell card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit...'} />
      </div>
    </div>
  );
};

export default TextCell;
