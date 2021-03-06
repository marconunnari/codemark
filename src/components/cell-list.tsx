import React, { Fragment } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CellDivider from "./cell-divider";
import CellListItem from "./cell-list-item";

import "./cell-list.css";

const CellList: React.FC = () => {
  const { loadCells } = useActions();

  React.useEffect(() => {
    loadCells();
  }, [loadCells]);

  const cells = useTypedSelector(({ cells: { data, order } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <CellDivider previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <CellDivider previousCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
