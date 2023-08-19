import React, {useState} from "react";

import ReactQuill from "react-quill";

function TextAreaEditor() {
  // textArea editor
  const [value, setValue] = useState("");

  const toolbarOptions = [
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ color: [] }, { background: [] }],

    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <ReactQuill modules={module} theme="snow" value={value} onChange={setValue}>
      <div style={{ height: "200px" }}></div>
    </ReactQuill>
  );
}

export default TextAreaEditor;
