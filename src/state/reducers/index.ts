import { combineReducers } from "redux";

import cellsReducer, { CellsState } from "./cells-reducer";
import bundlesReducer, { BundlesState } from "./bundles-reducer";

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

export type RootState = {
  cells: CellsState;
  bundles: BundlesState;
};
