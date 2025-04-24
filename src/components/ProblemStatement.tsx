//5

import { mockProblem } from '@/lib/mockProblem';

export default function ProblemStatement() {
  return (
    <div className="w-full md:w-1/3 p-8 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">{mockProblem.title}</h2>
      <section className="mb-6">
        <h3 className="text-lg font-semibold">Description</h3>
        <p className="text-gray-700 dark:text-gray-300">{mockProblem.description}</p>
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-semibold">Input Format</h3>
        <p className="text-gray-700 dark:text-gray-300">{mockProblem.inputFormat}</p>
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-semibold">Output Format</h3>
        <p className="text-gray-700 dark:text-gray-300">{mockProblem.outputFormat}</p>
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-semibold">Constraints</h3>
        <p className="text-gray-700 dark:text-gray-300">{mockProblem.constraints}</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold">Sample Input/Output</h3>
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
          <strong>Input:</strong>
          <br />
          {mockProblem.sampleInput}
          <br />
          <strong>Output:</strong>
          <br />
          {mockProblem.sampleOutput}
        </pre>
      </section>
    </div>
  );
}