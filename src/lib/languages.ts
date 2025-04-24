//2

import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { go } from '@codemirror/lang-go';
import { php } from '@codemirror/lang-php';
import { rust } from '@codemirror/lang-rust';
import { Extension } from '@codemirror/state';

export const languageExtensions: Record<string, { extension: Extension; label: string }> = {
  python: { extension: python(), label: 'Python' },
  javascript: { extension: javascript(), label: 'JavaScript' },
  typescript: { extension: javascript({ typescript: true }), label: 'TypeScript' },
  go: { extension: go(), label: 'Go' },
  php: { extension: php(), label: 'PHP' },
  swift: { extension: javascript(), label: 'Swift' }, // Placeholder, as CodeMirror lacks Swift support
  rust: { extension: rust(), label: 'Rust' },
  cpp: { extension: cpp(), label: 'C/C++' },
};

/*You’re exporting an object where each key is a string (like 'python', 'go', etc.)
Each key maps to an object containing:
extension: the CodeMirror language extension (used in the editor)
label: a nice display label (used in dropdown menus, etc.)
*/