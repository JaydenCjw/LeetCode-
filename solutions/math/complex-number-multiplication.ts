/**
 * 复数乘法
 * 难度：★★☆☆☆
 * 两个复数以 "实部+虚部i" 的字符串给出，返回乘积，格式相同。
 *
 * 示例："1+1i" * "1+1i" => "0+2i"
 *
 * 思路：(a+bi)(c+di) = (ac-bd) + (ad+bc)i。
 * 时间 O(1)，空间 O(1)
 */

function parseComplex(value: string): [number, number] {
  const plus = value.indexOf("+");
  const real = Number(value.slice(0, plus));
  const imag = Number(value.slice(plus + 1, value.length - 1));
  return [real, imag];
}

export function complexNumberMultiply(num1: string, num2: string): string {
  const [a, b] = parseComplex(num1);
  const [c, d] = parseComplex(num2);
  const real = a * c - b * d;
  const imag = a * d + b * c;
  return `${real}+${imag}i`;
}

console.log(complexNumberMultiply("1+1i", "1+1i"));
