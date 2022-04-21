/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let arr = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let j = i + 1, k = nums.length - 1
    let target = 0 - nums[i]
    while (j < k) {
      if (target == nums[j] + nums[k]) {
        let tepm = [nums[i], nums[j], nums[k]]
        arr.push(tepm)
        while (j < k && nums[j] == nums[j + 1]) {
          j++
        }
        while (j < k && nums[k] == nums[k - 1]) {
          k--
        }
        j++
        k--
      }
      else if (target < nums[j] + nums[k]) k--
      else j++
    }
  }
  return arr
};
// @lc code=end

