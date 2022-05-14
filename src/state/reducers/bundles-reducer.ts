import produce from "immer";

import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface BundlesState {
  [key: string]: {
    loading: boolean;
    error: string;
    code: string;
  } | undefined;
}

const initialState: BundlesState = {};

const reducer = produce(
  (state: BundlesState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          error: "",
          code: "",
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          error: action.payload.bundle.error,
          code: action.payload.bundle.code,
        };
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
