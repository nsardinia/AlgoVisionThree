import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {type ReactCodeMirrorRef} from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vsCodeDark} from '@fsegurai/codemirror-theme-vscode-dark';
import { useState } from "react";
import { EditorView } from '@codemirror/view';
import { useEffect, useRef } from "react";

export default function EditorWindowMirror() {
    const [get, set] = useState("");

    const customEditorStyles = EditorView.theme({
    "&": {
        backgroundColor: "#262625 !important", // Change this to your desired background color
        border: "none"
    },
    ".cm-gutters": {
      backgroundColor: "#262625 !important",
      border: "none"
    }
    }, { dark: true }); // Set to `true` if applying on top of a dark theme
    
    const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      console.log(get)
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const editor = useRef(null);

  return (
    <div style={{all: "unset"}}>
    <div style={{ margin: "3px", border: "8px solid #262625", borderRadius: "8px" }}>
       <CodeMirror
        value={get}
        extensions={[
          vsCodeDark,
          javascript({ jsx: true }),
          customEditorStyles
        ]}
        height="80vh"
        placeholder="Enter script here"
        onChange={(value) => set(value)}
      />
      <div style={{ width: "50vw" }} ref={editor}/>
    </div>
    <button onClick={handleButtonClick}>
        Click Me
    </button>
    </div>
  );
}
