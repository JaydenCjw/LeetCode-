/**
 * 找出知晓秘密的所有专家
 * 难度：★★★★☆
 * 专家 0 一开始知道秘密，并在 0 时刻告诉 firstPerson。meetings[i] = [x, y, time] 表示两人在该时刻见面，知道秘密的人会分享给当时能传递到的所有人。返回最终知道秘密的专家编号。
 *
 * 示例：n = 6，meetings = [[1,2,5],[2,3,8],[1,5,10]]，firstPerson = 1 => [0,1,2,3,5]
 *
 * 思路：按时间分组。同一时刻用并查集把见面的人连起来，并与已知秘密的人连通，会后更新知晓集合。
 * 时间 O(m log m)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
  const know = new Array<boolean>(n).fill(false);
  know[0] = true;
  know[firstPerson] = true;
  const ordered = meetings.slice().sort((a, b) => a[2] - b[2]);

  let index = 0;
  while (index < ordered.length) {
    const time = ordered[index][2];
    const start = index;
    const people: number[] = [];
    const local = new Map<number, number>();
    while (index < ordered.length && ordered[index][2] === time) {
      const left = ordered[index][0];
      const right = ordered[index][1];
      if (!local.has(left)) {
        local.set(left, people.length);
        people.push(left);
      }
      if (!local.has(right)) {
        local.set(right, people.length);
        people.push(right);
      }
      index++;
    }

    const uf = new UnionFind(people.length + 1);
    const secret = people.length;
    for (const person of people) {
      if (know[person]) {
        const id = local.get(person);
        if (id !== undefined) {
          uf.union(id, secret);
        }
      }
    }
    for (let meeting = start; meeting < index; meeting++) {
      const left = local.get(ordered[meeting][0]);
      const right = local.get(ordered[meeting][1]);
      if (left !== undefined && right !== undefined) {
        uf.union(left, right);
      }
    }
    for (const person of people) {
      const id = local.get(person);
      if (id !== undefined && uf.connected(id, secret)) {
        know[person] = true;
      }
    }
  }

  const answer: number[] = [];
  for (let person = 0; person < n; person++) {
    if (know[person]) {
      answer.push(person);
    }
  }
  return answer;
}

console.log(findAllPeople(6, [[1, 2, 5], [2, 3, 8], [1, 5, 10]], 1));
