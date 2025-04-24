//8

"use client";

import { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import ProblemStatement from "./ProblemStatement";
import OutputPanel from "./OutputPanel";
import ThemeToggle from "./ThemeToggle";
import { languageExtensions } from "@/lib/languages";
import { Language } from "@/types";

export default function Layout() {
  const [language, setLanguage] = useState<Language>("python");
  const [code, setCode] = useState<Record<Language, string>>({
    python: "# Write your Python code here",
    javascript: "// Write your JavaScript code here",
    typescript: "// Write your TypeScript code here",
    go: "// Write your Go code here",
    php: "// Write your PHP code here",
    swift: "// Write your Swift code here",
    rust: "// Write your Rust code here",
    cpp: "// Write your C/C++ code here",
  });
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedCode = localStorage.getItem(`code_${language}`);
    if (savedCode) {
      setCode((prev) => ({ ...prev, [language]: savedCode }));
    }
  }, [language]);

  const handleCodeChange = (value: string) => {
    setCode((prev) => ({ ...prev, [language]: value }));
    localStorage.setItem(`code_${language}`, value);
  };

  const handleReset = () => {
    const initialCode = {
      python: "# Write your Python code here",
      javascript: "// Write your JavaScript code here",
      typescript: "// Write your TypeScript code here",
      go: "// Write your Go code here",
      php: "// Write your PHP code here",
      swift: "// Write your Swift code here",
      rust: "// Write your Rust code here",
      cpp: "// Write your C/C++ code here",
    };
    setCode((prev) => ({ ...prev, [language]: initialCode[language] }));
    localStorage.setItem(`code_${language}`, initialCode[language]);
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  return (
    <div className="h-screen flex">
      {isFullScreen ? (
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="p-2 border rounded dark:bg-gray-800 dark:text-white"
            >
              {Object.keys(languageExtensions).map((lang) => (
                <option key={lang} value={lang}>
                  {languageExtensions[lang].label}
                </option>
              ))}
            </select>
            <div className="flex items-center space-x-4">
              <span>
                Time: {Math.floor(timeElapsed / 60)}:
                {(timeElapsed % 60).toString().padStart(2, "0")}
              </span>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reset Code
              </button>
              <button
                onClick={toggleFullScreen}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Exit Full Screen
              </button>
              <ThemeToggle />
            </div>
          </div>
          <CodeEditor language={language} onChange={handleCodeChange} value={code[language]} />
        </div>
      ) : (
        <>
          <div className="w-1/2 h-full overflow-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 pl-4">
            <ProblemStatement />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="h-[70%] flex flex-col">
              <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="p-2 border rounded dark:bg-gray-800 dark:text-white"
                >
                  {Object.keys(languageExtensions).map((lang) => (
                    <option key={lang} value={lang}>
                      {languageExtensions[lang].label}
                    </option>
                  ))}
                </select>
                <div className="flex items-center space-x-4">
                  <span>
                    Time: {Math.floor(timeElapsed / 60)}:
                    {(timeElapsed % 60).toString().padStart(2, "0")}
                  </span>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Reset Code
                  </button>
                  <button
                    onClick={toggleFullScreen}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Full Screen
                  </button>
                  <ThemeToggle />
                </div>
              </div>
              <CodeEditor language={language} onChange={handleCodeChange} value={code[language]} />
            </div>
            <div className="h-[30%] border-t border-gray-200 dark:border-gray-700">
              <OutputPanel />
            </div>
          </div>
        </>
      )}
    </div>
  );
}