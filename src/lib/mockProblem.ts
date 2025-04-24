//3

import { Problem } from '@/types';

export const mockProblem: Problem = {
  title: 'Two Sum',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  inputFormat: 'The first line contains the target sum. The second line contains space-separated integers.',
  outputFormat: 'Return the indices of the two numbers as space-separated integers.',
  constraints: '2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9',
  sampleInput: '9\n2 7 11 15',
  sampleOutput: '0 1',
};