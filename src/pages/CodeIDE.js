import React, { useState, useRef } from "react";
import axios from "axios";
import CodeMirror, { color } from "@uiw/react-codemirror";
import { closeBrackets} from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";
import { indentOnInput } from "@codemirror/language";
import { taiScript } from "../utils/taiScriptLanguage";

function CodeIDE() {
  const [inputText, setInputText] = useState("");
  const [outputText, setoutputText] = useState("");
  const textAreaRef = useRef(null);

  const hasOutput = outputText.trim().length > 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Example POST request to your backend
      const response = await axios.post("http://127.0.0.1:8000/api/processInput", {
        input: inputText,
      });
      setoutputText(response.data.output.toString());
    } catch (error) {
      console.error("Error fetching output:", error);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: 0, color: "white" }}>Run your own ..</h2>
        {/* <b style={{color: "white"}}>Input</b> */}
        {/* Editor */}
        {/* The "3-dot" top bar (macOS style) */}
        <div className="editor-window-bar">
          <span className="editor-dot red"></span>
          <span className="editor-dot yellow"></span>
          <span className="editor-dot green"></span>
        </div>

        <div className={`editor ${hasOutput ? "editor-collapsed" : ""}`}>
          <CodeMirror
            value={inputText}
            height="350px"
            theme="dark"
            extensions={[taiScript(), indentOnInput(), closeBrackets(), EditorView.lineWrapping,]}
            onChange={(value) => setInputText(value)}
          />
        </div>

        {/* Submit button */}
        <div className="editor-actions">
          <button onClick={handleSubmit}>
            Run
          </button>
        </div>

        {/* output section */}
        {hasOutput && (
          <div className="editor-output">
            <pre>{outputText}</pre>
          </div>
        )}
    </div>
  );
}

export default CodeIDE;