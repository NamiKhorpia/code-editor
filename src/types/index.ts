//1

export interface Problem {
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  sampleInput: string;
  sampleOutput: string;
}

export type Language =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'go'
  | 'php'
  | 'swift'
  | 'rust'
  | 'cpp';

export interface TestCase {
  input: string;
  output: string;
  passed: boolean;
}