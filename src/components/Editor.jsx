import React, { useState } from "react";
// import "codemirror/lib/codemirror.css";
import "codemirror/lib/codemirror.css"; //-->For writing the code css
import "codemirror/theme/material.css"; //-->For theme css
import "codemirror/mode/xml/xml"; //-->For writing HTML
import "codemirror/mode/javascript/javascript"; //-->For writing JS
import "codemirror/mode/css/css"; //-->For Writing CSS
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { displayName, language, onChange, value } = props;
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${!open && "collapse"}`}>
      {/* <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          theme: "material",
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
        }}
      /> */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
      <div className="editor-title">
        {" "}
        {displayName}
        <button
        className="collapseexpandbtn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
          ) : (
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Editor;
