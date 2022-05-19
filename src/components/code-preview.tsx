import React from "react";

import "./code-preview.css";

interface CodePreviewProps {
  code: string;
  error: string;
}

const iframeHtml = `
  <html>
    <head>
      <style>
        html {
          background-color: white;
        }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        const handleError = (err) => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
          console.error(err);
        };

        window.addEventListener('error', (event) => {
          event.preventDefault();
          handleError(event.error);
        });

        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            handleError(err)
          }
        }, false);
      </script>
    </body>
  </html>
`;

const CodePreview: React.FC<CodePreviewProps> = ({ code, error }) => {
  const iframe = React.useRef<any>();

  React.useEffect(() => {
    if (!iframe.current) return;

    iframe.current.srcdoc = iframeHtml;

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="code-preview-wrapper">
      <iframe
        title="Preview iframe"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={iframeHtml}
      />
      {error && <div className="code-preview-error">{error}</div>}
    </div>
  );
};

export default CodePreview;
