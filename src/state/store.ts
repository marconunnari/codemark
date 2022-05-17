import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { persistMiddleware as persist } from "./middlewares/persist-middleware";

export const store = createStore(reducers, {}, applyMiddleware(persist, thunk));
