/**
 * 独特的电子邮件地址
 * 难度：★★☆☆☆
 * 本地名中 '.' 被忽略，'+' 及其后的本地名被忽略。返回实际不同的邮箱数量。
 *
 * 示例：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"] => 2
 *
 * 思路：按规则规范化本地名和域名后放入集合。
 * 时间 O(n * L)，空间 O(n * L)
 */

export function numUniqueEmails(emails: string[]): number {
  const unique = new Set<string>();
  for (const email of emails) {
    const at = email.indexOf("@");
    let local = email.slice(0, at);
    const domain = email.slice(at + 1);
    const plus = local.indexOf("+");
    if (plus !== -1) {
      local = local.slice(0, plus);
    }
    local = local.split(".").join("");
    unique.add(`${local}@${domain}`);
  }
  return unique.size;
}

console.log(numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]));
