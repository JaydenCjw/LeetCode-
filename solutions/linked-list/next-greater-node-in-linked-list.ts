/**
 * 链表中的下一个更大节点
 * 难度：★★★☆☆
 * 对每个结点，找出其右侧第一个更大的值；不存在则为 0。
 *
 * 示例：[2,1,5] => [5,5,0]
 *
 * 思路：先转成数组，再用单调递减栈从右向左找下一个更大值。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, buildList } from "@/types";

export function nextLargerNodes(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  const answer = new Array<number>(values.length).fill(0);
  const stack: number[] = [];
  for (let i = 0; i < values.length; i += 1) {
    while (stack.length > 0 && values[stack[stack.length - 1]] < values[i]) {
      const index = stack.pop();
      if (index !== undefined) {
        answer[index] = values[i];
      }
    }
    stack.push(i);
  }
  return answer;
}

console.log(nextLargerNodes(buildList([2, 1, 5])));
