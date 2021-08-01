import MonacoEditor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

export interface EditorContent {
  [x: string]: any;
}

export interface EditorProps {
  value: EditorContent | string;
  onLinkClick: (url: string) => void;
  language?: string;
  onChange?: (
    value: string | undefined,
    e: editor.IModelContentChangedEvent,
    editor: editor.IStandaloneCodeEditor
  ) => void;
  width?: string;
  scrollWithContent?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  value,
  onLinkClick,
  language,
  onChange,
  width,
  scrollWithContent,
}) => {
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

  const handleEditorChange = (
    value: string | undefined,
    ev: editor.IModelContentChangedEvent
  ) => {
    if (!editorRef.current) return;
    onChange?.(value, ev, editorRef.current);
  };

  useEffect(() => {
    if (scrollWithContent) {
      const lineCount = editorRef.current?.getModel()?.getLineCount() || 0;
      editorRef.current?.revealLineInCenterIfOutsideViewport(lineCount);
    } else {
      editorRef.current?.setScrollTop(0);
    }
  }, [value, scrollWithContent]);

  return (
    <>
      <MonacoEditor
        height="100vh"
        width={width || '100%'}
        defaultLanguage={language || 'json'}
        defaultValue={''}
        theme="vs-dark"
        onMount={handleEditorMount}
        options={{
          wordWrap: 'wordWrapColumn',
          wrappingIndent: 'deepIndent',
        }}
        onChange={handleEditorChange}
        loading={<div></div>}
        value={
          typeof value === 'string' ? value : JSON.stringify(value, null, 2)
        }
      />
    </>
  );
};

export default Editor;
