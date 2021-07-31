import MonacoEditor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

export interface EditorContent {
  [x: string]: any;
}

export interface EditorProps {
  value: EditorContent;
  onLinkClick: (url: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onLinkClick }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    editorRef.current = editor;
    editor.onMouseDown((e) => {
      if (!e.target.element?.classList.contains('detected-link')) return;
      let url = (e.target.element as HTMLElement).innerText;
      const result = editor.getModel()?.findNextMatch(
        url,
        {
          column: 0,
          lineNumber: 0,
        },
        false,
        false,
        null,
        false
      );

      if (result?.range.startLineNumber) {
        const lineContent = editor
          .getModel()
          ?.getLineContent(result.range.startLineNumber);

        if (lineContent) {
          url = lineContent.split('"')[3];
        }
      }
      onLinkClick(url);
    });
  };

  useEffect(() => {
    editorRef.current?.getModel()?.setValue(JSON.stringify(value, null, 2));
    editorRef.current?.setScrollTop(0);
  }, [value]);

  return (
    <>
      <MonacoEditor
        height="100vh"
        width="100%"
        defaultLanguage="json"
        defaultValue={''}
        theme="vs-dark"
        onMount={handleEditorMount}
        options={{
          wordWrap: 'wordWrapColumn',
          wrappingIndent: 'deepIndent',
        }}
        loading={<div></div>}
      />
    </>
  );
};

export default Editor;
