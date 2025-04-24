//4

"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { languageExtensions } from '@/lib/languages';
import { Language } from '@/types';

interface CodeEditorProps {
  language: Language;
  onChange: (value: string) => void;
  value: string;
}

export default function CodeEditor({ language, onChange, value }: CodeEditorProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="border rounded-md overflow-hidden flex-1">
      <CodeMirror
        value={value}
        height="100%"
        extensions={[languageExtensions[language].extension]}
        onChange={onChange}
        theme={theme === 'dark' ? 'dark' : 'light'}
        basicSetup={{
          foldGutter: true,
          dropCursor: true,
          indentOnInput: true,
          autocompletion: true,
        }}
        className="text-sm h-full"
      />
    </div>
  );
}