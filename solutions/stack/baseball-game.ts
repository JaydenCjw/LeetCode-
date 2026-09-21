/**
 * 棒球比赛
 * 难度：★☆☆☆☆
 * 整数表示得分，C 撤销上一分，D 是上一分的两倍，+ 是前两分之和。返回总分。
 *
 * 示例：["5","2","C","D","+"] => 30
 *
 * 思路：用栈保存有效得分，遇到操作就改栈顶。
 * 时间 O(n)，空间 O(n)
 */

export function calPoints(operations: string[]): number {
  const stack: number[] = [];
  for (const operation of operations) {
    if (operation === "C") {
      stack.pop();
    } else if (operation === "D") {
      stack.push((stack[stack.length - 1] ?? 0) * 2);
    } else if (operation === "+") {
      const last = stack[stack.length - 1] ?? 0;
      const prev = stack[stack.length - 2] ?? 0;
      stack.push(last + prev);
    } else {
      stack.push(Number(operation));
    }
  }
  return stack.reduce((sum, score) => sum + score, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
