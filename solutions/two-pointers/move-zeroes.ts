/**
 * 移动零
 * 难度：★☆☆☆☆
 * 将所有 0 移动到数组末尾，保持非零元素相对顺序，必须原地操作。
 *
 * 示例：nums = [0,1,0,3,12] => [1,3,12,0,0]
 *
 * 思路：双指针，慢指针指向下一个非零应写入位置。
 * 时间 O(n)，空间 O(1)
 */

export function moveZeroes(nums: number[]): void {
  let writeIndex = 0;

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      if (readIndex !== writeIndex) {
        const temp = nums[writeIndex];
        nums[writeIndex] = nums[readIndex];
        nums[readIndex] = temp;
      }
      writeIndex++;
    }
  }
}

const sample = [0, 1, 0, 3, 12];
moveZeroes(sample);
console.log(sample);
