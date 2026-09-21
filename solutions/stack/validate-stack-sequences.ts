/**
 * 验证栈序列
 * 难度：★★☆☆☆
 * 已知入栈序列，判断给定出栈序列能否由某个栈操作得到。
 *
 * 示例：pushed = [1,2,3,4,5]，popped = [4,5,3,2,1] => true
 *
 * 思路：按入栈顺序压栈，只要栈顶等于下一个应出栈的值就弹出。
 * 时间 O(n)，空间 O(n)
 */

export function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = [];
  let popIndex = 0;
  for (const value of pushed) {
    stack.push(value);
    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex += 1;
    }
  }
  return stack.length === 0;
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
