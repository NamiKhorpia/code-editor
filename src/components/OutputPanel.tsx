//6

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface OutputPanelProps {
  // Removed onRunCode since it's unused
}

export default function OutputPanel({}: OutputPanelProps) {
  const [output, setOutput] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate test case execution with a 1-second delay
    const timer = setInterval(() => {
      setOutput((prev) => {
        const newOutput = prev + "Test case executed successfully!\n";
        return newOutput.length > 100 ? "" : newOutput; // Reset after 100 chars
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 overflow-auto">
      <div className="flex justify-between mb-2">
        <button
          onClick={() => setOutput("")}
          className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Clear Output
        </button>
        <button
          disabled
          className="px-2 py-1 bg-gray-400 text-white rounded cursor-not-allowed"
        >
          Run Code
        </button>
        <button
          disabled
          className="px-2 py-1 bg-gray-400 text-white rounded cursor-not-allowed"
        >
          Run All Tests
        </button>
      </div>
      <pre className="bg-gray-200 dark:bg-gray-900 p-2 rounded text-sm">
        {output || "No results yet. Click \"Run Code\" to see output."}
      </pre>
    </div>
  );
}