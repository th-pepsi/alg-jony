/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(-1)
  let curr = l3
  let flag = 0
  while (l1 || l2 ||flag) {
    let sum = (l1?l1.val:0) + (l2?l2.val:0) + flag
    flag = Math.floor(sum/10)
    curr.next = new ListNode(sum % 10)
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
    curr = curr.next
  }
  return l3.next
};
// @lc code=end

