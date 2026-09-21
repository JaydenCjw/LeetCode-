/**
 * 字符串相乘
 * 难度：★★★☆☆
 * 给定两个以字符串形式给出的非负整数，返回它们的乘积（字符串）。
 *
 * 示例：num1 = "123", num2 = "456" => "56088"
 *
 * 思路：模拟竖式乘法，结果数组长度为 m+n。
 * 时间 O(m*n)，空间 O(m+n)
 */

export function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length;
  const n = num2.length;
  const result = new Array<number>(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const product = Number(num1[i]) * Number(num2[j]);
      const sum = product + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  let start = 0;
  while (start < result.length - 1 && result[start] === 0) start++;
  return result.slice(start).join("");
}

console.log(multiply("123", "456"));
