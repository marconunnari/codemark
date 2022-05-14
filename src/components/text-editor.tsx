import MDEditor from "@uiw/react-md-editor";
import React from "react";

import { Cell } from "../state";
import { useActions } from "../hooks/useActions";

import "./text-editor.css";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
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
      <div className="text-editor" ref={ref}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit...'} />
      </div>
    </div>
  );
};

export default TextEditor;
