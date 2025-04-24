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
      setOutput("Compilation successful, no errors found!\n");
      setIsRunning(false);
    }, 1000); // Simulate 1-second compilation
    return () => clearTimeout(timer);
  };

  const handleRunAllTests = () => {
    setOutput("Running all test cases...\n");
    const timer = setTimeout(() => {
      // Simulate test case results for "Two Sum" problem
      const testCases = [
        {
          input: "target = 9\nnums = [2, 7, 11, 15]",
          expectedOutput: "0 1",
          yourOutput: "0 1", // Simulated correct output
        },
        {
          input: "target = 6\nnums = [3, 2, 4]",
          expectedOutput: "1 2",
          yourOutput: "1 3", // Simulated incorrect output
        },
      ];

      let result = "";
      testCases.forEach((test, index) => {
        result += `Test Case ${index + 1}:\n`;
        result += `INPUT:\n${test.input}\n`;
        result += `EXPECTED OUTPUT:\n${test.expectedOutput}\n`;
        result += `YOUR OUTPUT:\n${test.yourOutput}\n`;
        const passed = test.expectedOutput === test.yourOutput;
        result += passed
          ? `<span style="color: green;">Test case passed</span>\n\n`
          : `<span style="color: red;">Test case failed</span>\n\n`;
      });
      setOutput(result);
    }, 1000); // Simulate 1-second test execution
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setOutput((prev) => {
          const newOutput = prev + "Compilation successful, no errors found!\n";
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
          onClick={handleRunAllTests}
          className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Run All Tests
        </button>
      </div>
      <pre
        className="bg-gray-200 dark:bg-gray-900 p-2 rounded text-sm"
        dangerouslySetInnerHTML={{ __html: output || "No results yet. Click \"Run Code\" to see output." }}
      />
    </div>
  );
}