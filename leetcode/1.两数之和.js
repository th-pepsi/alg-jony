/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let nMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let delta = target -nums[i]
    if(nMap.has(delta)) return [nMap.get(delta),i]
    nMap.set(nums[i],i)
  }
  return []
};
// @lc code=end

