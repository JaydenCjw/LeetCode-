/**
 * 长按键入
 * 难度：★★☆☆☆
 * 判断 typed 是否可能由 name 长按某些键得到。长按只能重复刚输入的字符。
 *
 * 示例：name = "alex", typed = "aaleex" => true
 *
 * 思路：双指针同步匹配，typed 多出来的字符必须等于前一个字符。
 * 时间 O(n + m)，空间 O(1)
 */

export function isLongPressedName(name: string, typed: string): boolean {
  let i = 0;
  for (let j = 0; j < typed.length; j++) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    }
  }
  return i === name.length;
}

console.log(isLongPressedName("alex", "aaleex"));
