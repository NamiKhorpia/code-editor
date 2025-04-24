Code Editor
A responsive code editor, featuring a problem statement panel, CodeMirror-based editor, and output console.

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

Tech Stack:
Framework: Next.js 14 with TypeScript
Styling: Tailwind CSS
Editor: CodeMirror (via @uiw/react-codemirror)
Theme: next-themes for light/dark mode

