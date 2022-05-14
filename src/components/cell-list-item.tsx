import { Cell } from "../state";
import TextEditor from "./text-editor";
import CodeCell from "./code-cell";
import ActionBar from "./action-bar";

import "./cell-list-item.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      <div className={cell.type === "code" ? "action-bar-wrapper" : ""}>
        <ActionBar id={cell.id} />
      </div>
      {cell.type === "code" ? (
        <CodeCell cell={cell} />
      ) : (
        <TextEditor cell={cell} />
      )}
    </div>
  );
};

export default CellListItem;
