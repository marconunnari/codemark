import MDEditor from "@uiw/react-md-editor";
import React from "react";

import "./text-editor.css";

const TextEditor: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState("# Header");

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
        <MDEditor value={value} onChange={(v) => setValue(v || "")} />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
