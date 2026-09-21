/**
 * 模式匹配
 * pattern 仅含 a/b，判断 value 是否匹配该模式。
 * a、b 可映射为空串，但不能同时映射相同非空串。
 *
 * 示例：pattern = "abba", value = "dogcatcatdog" => true
 *
 * 思路：枚举 a 的长度，推导 b 的长度，再按 pattern 校验切分一致性。
 * 时间 O(n^2)，空间 O(n)
 */

export function patternMatching(pattern: string, value: string): boolean {
  let countA = 0;
  let countB = 0;
  for (const char of pattern) {
    if (char === "a") countA++;
    else countB++;
  }

  let currentPattern = pattern;
  if (countA < countB) {
    [countA, countB] = [countB, countA];
    currentPattern = pattern
      .split("")
      .map((char) => (char === "a" ? "b" : "a"))
      .join("");
  }

  if (value.length === 0) {
    return countB === 0;
  }
  if (currentPattern.length === 0) {
    return false;
  }

  for (let aLen = 0; countA * aLen <= value.length; aLen++) {
    const remain = value.length - countA * aLen;
    if (!((countB === 0 && remain === 0) || (countB !== 0 && remain % countB === 0))) {
      continue;
    }

    const bLen = countB === 0 ? 0 : remain / countB;
    let pos = 0;
    let valueA = "";
    let valueB = "";
    let matched = true;

    for (const char of currentPattern) {
      if (char === "a") {
        const sub = value.slice(pos, pos + aLen);
        if (valueA.length === 0) valueA = sub;
        else if (valueA !== sub) {
          matched = false;
          break;
        }
        pos += aLen;
      } else {
        const sub = value.slice(pos, pos + bLen);
        if (valueB.length === 0) valueB = sub;
        else if (valueB !== sub) {
          matched = false;
          break;
        }
        pos += bLen;
      }
    }

    if (matched && valueA !== valueB) {
      return true;
    }
  }

  return false;
}

console.log(patternMatching("abba", "dogcatcatdog"));
console.log(patternMatching("abba", "dogcatcatfish"));
