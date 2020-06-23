// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let strLen = s.length;
    let key = 0; //遍历字符串的脚标
    let length = 0; //最长字串的长度

    while (key < strLen) {
        let strArr = [];
        let count = 0;
        for (let i = key; i < strLen; i++) {
            let val = s[i];
            if (strArr[val] && strArr[val] != 0) {
                break;
            }
            strArr[val] = 1;
            count++;
        }
        if (length == 0 || length < count) {
            length = count;
        }
        key++;
    }

    return length;
};

console.log(lengthOfLongestSubstring("ads"))