import React from "react";

interface PreviewProps {
  code: string;
}

const iframeHtml = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        }, false);
      </script>
    </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = React.useRef<any>();

  React.useEffect(() => {
    if (!iframe.current) return;

    iframe.current.srcdoc = iframeHtml;

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 100);
  }, [code]);

  return (
    <iframe
      title="preview"
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={iframeHtml}
    />
  );
};

export default Preview;
