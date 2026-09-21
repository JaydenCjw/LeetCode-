/**
 * 求众数 II
 * 难度：★★★☆☆
 * 找出所有出现次数大于 n/3 的元素。
 *
 * 示例：[3,2,3] => [3]
 *
 * 思路：摩尔投票，最多两个候选人，再计数验证。
 * 时间 O(n)，空间 O(1)
 */

export function majorityElement(nums: number[]): number[] {
  let candidateA = 0;
  let candidateB = 1;
  let countA = 0;
  let countB = 0;

  for (const num of nums) {
    if (num === candidateA) {
      countA++;
    } else if (num === candidateB) {
      countB++;
    } else if (countA === 0) {
      candidateA = num;
      countA = 1;
    } else if (countB === 0) {
      candidateB = num;
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  countA = 0;
  countB = 0;
  for (const num of nums) {
    if (num === candidateA) {
      countA++;
    } else if (num === candidateB) {
      countB++;
    }
  }

  const result: number[] = [];
  const threshold = nums.length / 3;
  if (countA > threshold) {
    result.push(candidateA);
  }
  if (countB > threshold) {
    result.push(candidateB);
  }
  return result;
}

console.log(majorityElement([3, 2, 3]));
