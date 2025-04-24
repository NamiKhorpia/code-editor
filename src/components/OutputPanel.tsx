//6

"use client";

import { useState } from 'react';
import { TestCase } from '@/types';

interface OutputPanelProps {
  onRunCode: () => void;
}

export default function OutputPanel({ onRunCode }: OutputPanelProps) {
  const [results, setResults] = useState<TestCase[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setResults([]);
    // Simulate execution delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Placeholder test cases
    setResults([
      { input: '9\n2 7 11 15', output: '0 1', passed: true },
      { input: '3\n1 2 3', output: '0 2', passed: false },
    ]);
    setIsRunning(false);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-400"
        >
          Run All Tests
        </button>
      </div>
      <div className="text-sm">
        {results.length === 0 ? (
          <p className="text-gray-500">No results yet. Click "Run Code" to see output.</p>
        ) : (
          results.map((result, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>Test Case {index + 1}:</strong> {result.passed ? '✅ Passed' : '❌ Failed'}
              </p>
              <p>
                <strong>Input:</strong> {result.input}
              </p>
              <p>
                <strong>Output:</strong> {result.output}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}