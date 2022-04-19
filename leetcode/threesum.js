// 三数之和
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
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
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
