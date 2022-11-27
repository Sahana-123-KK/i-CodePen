import { useEffect, useState } from "react";
import useLocalStoragehook from "../hooks/localStoragehook";
import Editor from "./Editor";

function App() {
  // const [html, setHtml] = useLocalStoragehook("html", "");
  // const [css, setCss] = useLocalStoragehook("css", "");
  // const [js, setJs] = useLocalStoragehook("js", "");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`<html>
                  <body>${html} </body>
                  <style> ${css} </style>
                  <script>${js} </script>
                  </html>`);
    }, 250);

    return () => clearTimeout(timeOut); //-->This cancels the timeOut fnc which was initiated before this, and brand new timeout is the only timeout left
  }, [html, css, js]);

  return (
    <>
      <span className="head">
        {" "}
        <i class="fa-brands fa-codepen"></i>&nbsp;ICODEPEN
      </span>
      <div className="flexxcolcontainer">
        <div className="panetop top-pane">
          <Editor
            displayName="HTML"
            language="xml"
            value={html}
            onChange={setHtml}
          />
          <Editor
            displayName="CSS"
            language="css"
            value={css}
            onChange={setCss}
          />
          <Editor
            displayName="JS"
            language="javascript"
            value={js}
            onChange={setJs}
          />
          {/* <Editor />
        <Editor /> */}
        </div>
        <div className="panebottom">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            height="100%"
            width="100%"
            frameBorder="0"
          />
        </div>
      </div>
    </>
  );
}

export default App;
