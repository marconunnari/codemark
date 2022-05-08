import React from "react";
import { createRoot } from "react-dom/client";
import * as esbuild from "esbuild-wasm";

import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

const App = () => {
  const esbuildServiceRef = React.useRef<any>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [input, setInput] = React.useState("");

  const startService = async () => {
    esbuildServiceRef.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  React.useEffect(() => {
    startService();
  }, []);

  const html = `
    <html>
      <head> </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener("message", (event) => {
            try {
              const code = event.data;
              eval(code);
            } catch (err) {
              const root = document.querySelector("#root");
              root.innerHTML = '<div style="color: red;"><h4>Runtime error </h4>' + err + '</div>';
              console.error(err)
            }
          }, false)
        </script>
      </body>
    </html>
  `;

  const onClick = async () => {
    if (!esbuildServiceRef.current) return;
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    iframe.srcdoc = html;

    const result = await esbuildServiceRef.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });

    const bundledCode = result.outputFiles[0].text;
    iframe.contentWindow?.postMessage(bundledCode, "*");
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <iframe
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframeRef}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
