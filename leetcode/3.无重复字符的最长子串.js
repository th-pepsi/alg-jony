/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length
    if(!len) return 0
    let dp = new Array(len).fill(1)
    for (let i = 1 ; i <len; i++) {
      const w = s[i];
      if(s[i] == s[i-1]) continue
      let lastIdx = s.slice(0,i).lastIndexOf(w)
      if(lastIdx>-1) console.log(i,lastIdx)
      dp[i] = Math.min(dp[i-1]+1,lastIdx>-1?i-lastIdx:i+1)
    }
    dp.sort((a,b)=>b-a)
    return dp[0]
};
// @lc code=end

