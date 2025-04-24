//6

"use client";

import { useState, useEffect } from "react";

export default function OutputPanel() {
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("Running code...\n");
    const timer = setTimeout(() => {
      setOutput((prev) => prev + "Test case executed successfully!\n");
      setIsRunning(false);
    }, 1000); // Simulate 1-second execution
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setOutput((prev) => {
          const newOutput = prev + "Test case executed successfully!\n";
          return newOutput.length > 100 ? prev : newOutput; // Limit to 100 chars
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

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
          onClick={handleRunCode}
          className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
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