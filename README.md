Code Editor Challenge
A responsive code editor built for an internship interview task, featuring a problem statement panel, CodeMirror-based editor, and output console.
Features

Core Requirements:
CodeMirror editor with syntax highlighting for Python, JavaScript, TypeScript, Go, PHP, Swift, Rust, and C/C++.
Fixed problem statement panel with title, description, input/output format, constraints, and sample input/output.
Output panel with simulated test case results and a fake execution delay.
Theme toggle (light/dark) respecting system preferences.
Responsive and accessible UI using Tailwind CSS.

Bonus Features:
Reset button to clear editor content.
LocalStorage to persist code per language.
"Run All Test Cases" button with simulated outputs.
Timer showing time elapsed since opening the problem.

Tech Stack

Framework: Next.js 14 with TypeScript
Styling: Tailwind CSS
Editor: CodeMirror (via @uiw/react-codemirror)
Theme: next-themes for light/dark mode

Setup Instructions

Clone the repository:git clone <repository-url>
cd code-editor


Install dependencies:npm install


Run the development server:npm run dev


Open http://localhost:3000 in your browser.

Additional Libraries

@codemirror/*: Language support for CodeMirror.
@uiw/react-codemirror: React wrapper for CodeMirror.
next-themes: Theme management.
uuid: Generate unique artifact IDs (if needed).

Notes

The Swift language uses a JavaScript extension as a placeholder due to limited CodeMirror support.
The output panel simulates test case execution with a 1-second delay and placeholder results.
Code is persisted in localStorage per language to maintain user input across sessions.

Submission

GitHub Repository: <repository-url>

