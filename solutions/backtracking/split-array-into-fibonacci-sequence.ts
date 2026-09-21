/**
 * 将数组拆分成斐波那契序列
 * 难度：★★★☆☆
 * 把数字串拆成至少三个数的斐波那契序列，每个数不超过 2^31-1，且无前导零。
 *
 * 示例："123456579" => [123,456,579]
 *
 * 思路：回溯枚举下一段数字。已有两项后，下一项必须等于前两项之和，过大则停止扩展。
 * 时间 O(n^2)，空间 O(n)
 */

const MAX_INT = 2147483647;

export function splitIntoFibonacci(num: string): number[] {
  const answer: number[] = [];

  function dfs(start: number, path: number[]): boolean {
    if (start === num.length) {
      if (path.length >= 3) {
        answer.push(...path);
        return true;
      }
      return false;
    }
    for (let i = start; i < num.length; i++) {
      if (i > start && num[start] === "0") {
        break;
      }
      const token = num.slice(start, i + 1);
      const value = Number(token);
      if (value > MAX_INT) {
        break;
      }
      const len = path.length;
      if (len >= 2) {
        const sum = path[len - 2] + path[len - 1];
        if (sum > MAX_INT || value > sum) {
          break;
        }
        if (value < sum) {
          continue;
        }
      }
      path.push(value);
      if (dfs(i + 1, path)) {
        return true;
      }
      path.pop();
    }
    return false;
  }

  dfs(0, []);
  return answer;
}

console.log(JSON.stringify(splitIntoFibonacci("123456579")));
