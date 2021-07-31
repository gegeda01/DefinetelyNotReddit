import MonacoEditor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import React, { useEffect, useRef, useState } from 'react';

export interface EditorContent {
  [x: string]: any;
}

export interface EditorProps {
  value: EditorContent;
  onLinkClick: (url: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onLinkClick }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [content, setContent] = useState<EditorContent>({});

  const handleEditorMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    editorRef.current = editor;
    editor.onMouseDown((e) => {
      if (!e.target.element?.classList.contains('detected-link')) return;
      onLinkClick((e.target.element as HTMLElement).innerText);
    });
    // console.log(editor.getModel()?.getValue());
    // editor.getModel()?.setValue('Hello World!');
  };

  useEffect(() => {
    setContent(value);
  }, [value]);

  return (
    <>
      <MonacoEditor
        height="100vh"
        defaultLanguage="json"
        defaultValue={JSON.stringify(content, null, 2)}
        theme="vs-dark"
        onMount={handleEditorMount}
      />
    </>
  );
};

export default Editor;
