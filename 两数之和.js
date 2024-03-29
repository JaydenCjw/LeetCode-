// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

let nums = [1, 4, 5, 7, 8, 9, 11, 15, 17, 20];
let target = 20;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numLen = nums.length;
    if (numLen < 2) return 0;
    let result = [];

    // 遍历获取每个值，循环相加，判断是否等于目标值
    for (let i = 0; i < numLen - 1; i++) {
        let num0 = nums[i];
        for (let j = 1 + i; j < numLen; j++) {
            let num1 = nums[j];
            let numS = num0 + num1;
            if (numS == target) {
                let s = [i, j];
                result.push(s);
            }
        }
    }
    if (result.length == 1) return result[0];
    return result;
};

let result = twoSum(nums, target);
console.log(result);
