/**
 * 账户合并
 * accounts[i] = [name, email1, ...]，同一人的邮箱可合并。
 * 返回合并后账户：姓名 + 排序后的邮箱列表。
 *
 * 思路：邮箱映射到下标，并查集合并同一账户内邮箱所属人。
 * 时间近似 O(n log n)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function accountsMerge(accounts: string[][]): string[][] {
  const emailToId = new Map<string, number>();
  const emailToName = new Map<string, string>();
  let id = 0;

  for (const account of accounts) {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!emailToId.has(email)) {
        emailToId.set(email, id++);
        emailToName.set(email, name);
      }
    }
  }

  const uf = new UnionFind(id);
  for (const account of accounts) {
    const firstEmail = account[1];
    const firstId = emailToId.get(firstEmail)!;
    for (let i = 2; i < account.length; i++) {
      uf.union(firstId, emailToId.get(account[i])!);
    }
  }

  const groups = new Map<number, string[]>();
  for (const [email, emailId] of emailToId) {
    const root = uf.find(emailId);
    const list = groups.get(root) ?? [];
    list.push(email);
    groups.set(root, list);
  }

  const result: string[][] = [];
  for (const emails of groups.values()) {
    emails.sort();
    result.push([emailToName.get(emails[0])!, ...emails]);
  }
  return result;
}

console.log(
  accountsMerge([
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"],
  ]),
);
