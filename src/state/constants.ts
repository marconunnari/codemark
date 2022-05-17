import { Cell } from "./cell";

export const SAVED_CELLS_LOCAL_STORAGE_KEY = "saved-cells";

export const placeholderCells: Cell[] = [
  {
    id: "1652819705295-gr8",
    type: "text",
    content:
      "# Codemark\n\nThis is an interactive coding environment. You can write Javascript, see it executed and write comprehensive documentation using Markdown.\n\n- Click any text cell (including this one) to edit it.\n- The code in each code editor is all joined together into one file. If you define a variable in the first cell you can refer to it in any following cell.\n- You can show any React component, string, number or anything else by calling the `show` function. This is a function built in this environment.\n- Re-order or delete cells using the buttons on the top right.\n- Add new cells by hovering on the divider between each cell.\n\nAll of you changes are saved automatically in your browser local storage.",
  },
  {
    id: "1652819783211-np2",
    type: "code",
    content:
      "import { useState } from 'react'\n\nconst Counter = () => {\n  const [count, setCount] = useState(0)\n\n  const decrement = () => setCount(c => c - 1)\n  const increment = () => setCount(c => c + 1)\n\n  return (\n    <div style={{display: 'flex', alignItems: 'center', gap: 10}}>\n      <button onClick={decrement} style={{height: 20}}>Decrement</button>\n      <h3>Count: {count}</h3>\n      <button onClick={increment} style={{height: 20}}>Increment</button>\n    </div>\n  )\n}\n\nshow(<Counter />)",
  },
  {
    id: "1652821018514-xte",
    type: "code",
    content:
      "const App = () => {\n  return (\n    <div>\n      <h1>Counter app</h1>\n      <i>Counter component will be rendered below...</i>\n      <hr />\n      <Counter />\n    </div>\n  )\n}\nshow(<App />)",
  },
];
