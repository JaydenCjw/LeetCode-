// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"
//  

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

var longestPalindrome = function (s) {
    let dp = Array.from({
        length: s.length
    }).map((Iitem, Iindex) => {
        return Array.from({
            length: s.length
        }).map((JItem, JIndex) => {
            return JIndex == Iindex || null;
        })
    })
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (j - i == 0) dp[i][j] = true;
            else if (j - i == 1) dp[i][j] = s[i] == s[j]
            else if (j - i >= 2) {
                dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j] || false;
            }
        }
    }

    let res = dp.reduce((acc, item, index) => {
        let lastTrueIndex = item.lastIndexOf(true)
        let len = lastTrueIndex - index + 1;
        if (len >= acc[0]) {
            acc = [lastTrueIndex - index + 1, s.slice(index, lastTrueIndex + 1)]
        }
        return acc;
    }, [1, ''])
    return res[1];
}

let date1 = "aaaaab";
console.log(longestPalindrome(date1))