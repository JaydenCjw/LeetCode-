/**
 * 重新排列日志文件
 * 难度：★★☆☆☆
 * 字母日志按内容字典序、内容相同再按标识符排序，全部排在数字日志前面。数字日志保持原相对顺序。
 *
 * 示例：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"] => ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 *
 * 思路：字母日志和数字日志分开，只对字母日志排序。
 * 时间 O(n log n * L)，空间 O(n)
 */

export function reorderLogFiles(logs: string[]): string[] {
  const letters: string[] = [];
  const digits: string[] = [];
  for (const log of logs) {
    const content = log.slice(log.indexOf(" ") + 1);
    if (content[0] >= "0" && content[0] <= "9") {
      digits.push(log);
    } else {
      letters.push(log);
    }
  }
  letters.sort((left, right) => {
    const leftContent = left.slice(left.indexOf(" ") + 1);
    const rightContent = right.slice(right.indexOf(" ") + 1);
    if (leftContent === rightContent) {
      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }
      return 0;
    }
    if (leftContent < rightContent) {
      return -1;
    }
    return 1;
  });
  return [...letters, ...digits];
}

console.log(reorderLogFiles([
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero",
]));
