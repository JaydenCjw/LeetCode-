/**
 * 无法吃午餐的学生数量
 * 难度：★☆☆☆☆
 * 学生和三明治都只用 0 和 1 表示偏好。队首学生口味不符就排到队尾；栈顶三明治没人要时停止。返回剩下的学生数。
 *
 * 示例：students = [1,1,0,0]，sandwiches = [0,1,0,1] => 0
 *
 * 思路：统计两种学生人数。按三明治顺序发放，某种口味已经没人要就结束。
 * 时间 O(n)，空间 O(1)
 */

export function countStudents(students: number[], sandwiches: number[]): number {
  const count = [0, 0];
  for (const student of students) {
    count[student] += 1;
  }
  for (const sandwich of sandwiches) {
    if (count[sandwich] === 0) {
      return count[0] + count[1];
    }
    count[sandwich] -= 1;
  }
  return 0;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
