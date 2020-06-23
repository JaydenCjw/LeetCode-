// 你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。

// 示例 1：

// 输入： pattern = "abba", value = "dogcatcatdog"
// 输出： true
// 示例 2：

// 输入： pattern = "abba", value = "dogcatcatfish"
// 输出： false
// 示例 3：

// 输入： pattern = "aaaa", value = "dogcatcatdog"
// 输出： false
// 示例 4：

// 输入： pattern = "abba", value = "dogdogdogdog"
// 输出： true
// 解释： "a"="dogdog",b=""，反之也符合规则
// 提示：

// 0 <= len(pattern) <= 1000
// 0 <= len(value) <= 1000
// 你可以假设pattern只包含字母"a"和"b"，value仅包含小写字母。

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
	let count_a = 0;
	let count_b = 0;
	const p_len = pattern.length;
	for (let i = 0; i < p_len; i++) {
		if (pattern[i] === 'a') {
			count_a++;
		} else {
			count_b++;
		}
	}
	if (count_a < count_b) {
		[count_a,count_b] = [count_b,count_a];
		let s = '';
		for (let i = 0; i < p_len; i++) {
			if (pattern[i] === 'a') {
				s += 'b';
			} else {
				s += 'a';
			}
		}
		pattern = s;
	}
	if (value.length === 0) {
		return count_b === 0;
	}

	if (pattern.length === 0) {
		return false;
	}

	for (let a_len = 0; count_a * a_len <= value.length; a_len++) {
		const n = value.length - count_a * a_len;
		if ((count_b === 0 && n === 0) || (count_b !== 0 && n % count_b === 0)) {
			const b_len = count_b === 0 ? 0 : Math.floor(n / count_b);
			let pos = 0;
			let sign = true;
			let value_a = '';
			let value_b = '';
			for (let i = 0; i < p_len; i++) {
				if (pattern[i] === 'a') {
					const sub = value.substr(pos, a_len);
					if (!value_a.length) {
						value_a = sub;
					} else if (value_a !== sub) {
						sign = false;
						break;
					}
					pos += a_len;
				} else {
					const sub = value.substr(pos, b_len);
					if (!value_b.length) {
						value_b = sub;
					} else if (value_b !== sub) {
						sign = false;
						break;
					}
					pos += b_len;
				}
			}
			if (sign && value_a !== value_b) {
				return true;
			}
		}
	}
	return false;
};


let date1 = "aaaaab";
let date2 = "xahnxdxyaahnxdxyaahnxdxyaahnxdxyaauxuhuo";
console.log(patternMatching(date1, date2))