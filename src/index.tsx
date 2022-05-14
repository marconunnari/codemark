import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./state";
import CellList from "./components/cell-list";

import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(<App />);
