import { useEffect, useState } from "react";
import Editor from "../components/Editor";


export default function index() {  
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div>
      <Editor
        name="description"
        onChange={(data:any) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />       
      {data}
    </div>
  );
}