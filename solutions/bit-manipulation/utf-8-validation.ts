/**
 * UTF-8 编码验证
 * 难度：★★★☆☆
 * 判断整数数组是否为合法 UTF-8 字节序列。每个整数只用低 8 位。
 *
 * 示例：[197,130,1] => true；[235,140,4] => false
 *
 * 思路：根据首字节确定后续字节数，后续字节必须以 10 开头。
 * 时间 O(n)，空间 O(1)
 */

export function validUtf8(data: number[]): boolean {
  let remain = 0;
  for (const value of data) {
    const byte = value & 255;
    if (remain === 0) {
      if ((byte >> 7) === 0) {
        continue;
      }
      if ((byte >> 5) === 0b110) {
        remain = 1;
      } else if ((byte >> 4) === 0b1110) {
        remain = 2;
      } else if ((byte >> 3) === 0b11110) {
        remain = 3;
      } else {
        return false;
      }
    } else {
      if ((byte >> 6) !== 0b10) {
        return false;
      }
      remain--;
    }
  }
  return remain === 0;
}

console.log(validUtf8([197, 130, 1]), validUtf8([235, 140, 4]));
