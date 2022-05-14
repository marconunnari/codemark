import { combineReducers } from "redux";

import cellsReducer, { CellsState } from "./cells-reducer";

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type RootState = {
  cells: CellsState;
};
