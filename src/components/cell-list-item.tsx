import { Cell } from "../state";
import CellActionBar from "./cell-action-bar";
import CodeCell from "./code-cell";
import TextCell from "./text-cell";

import "./cell-list-item.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      <div className={cell.type === "code" ? "action-bar-wrapper" : ""}>
        <CellActionBar id={cell.id} />
      </div>
      {cell.type === "code" ? (
        <CodeCell cell={cell} />
      ) : (
        <TextCell cell={cell} />
      )}
    </div>
  );
};

export default CellListItem;
