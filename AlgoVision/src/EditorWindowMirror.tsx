import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {type ReactCodeMirrorRef} from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vsCodeDark} from '@fsegurai/codemirror-theme-vscode-dark';
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function EditorWindowMirror() {
    const [get, set] = useState("");

    
    const handleButtonClick = async () => {
    try {
      const response = await fetch("https://httpbin.org/get", {
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

  <link rel="stylesheet" href=""/>
  const editor = useRef(null);

  return (
    <div style={{all: "unset"}}>
    <div style={{ margin: "1%" }}>
       <CodeMirror
        value={get}
        extensions={[
          vsCodeDark,
          javascript({ jsx: true })
        ]}
        theme={vsCodeDark}
        height="80vh"
        placeholder="Enter script here"
        onChange={(value) => set(value)}
      />
      <div style={{ width: "48vw" }} ref={editor}/>
    </div>
    <button onClick={handleButtonClick}>
        Click Me
    </button>
    </div>
  );
}