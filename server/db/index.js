// MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/leetcode', () => console.log('Running mongo..'));

const Entry = mongoose.model('Entry', 
  {
    name: String,
    prompt: String,
    promptLink: String,
    promptCode: String,
    solution: String,
    readTime: String,
    whiteboardTime: String,
    psudocodeTime: String,
    codeTime: String,
    totalTime: String,
    constraints: String,
    examples: [{}]
  });

const twoSums = new Entry({
  name: 'Two Sums',
  prompt: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
  promptLink: 'https://leetcode.com/problems/two-sum/',
  promptCode: `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
 var twoSum = function(nums, target) {
     
 };`,
  solution: `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
 var twoSum = function(nums, target) {
     
 };`,
  readTime: `2:05`,
  whiteboardTime: `N/A`,
  psudocodeTime: `7:55`,
  codeTime: `18:35`,
  totalTime: `28:35`,
  constraints: `
  -2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  -Only one valid answer exists.`,
  examples: [{
    1: `
  Input: nums = [2,7,11,15], target = 9,
  Output: [0,1],
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`
  },
  {
    2: `
  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  `},
  {
    3: `
  Input: nums = [3,3], target = 6
  Output: [0,1]
  `}]
});
// twoSums.save().then(() => console.log('donezo'));
module.exports = Entry;

/* MySQL
const mysql2 = require('mysql2');
const Promise = require('bluebird');
require('dotenv').config();

const connection = mysql2({
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.USER_DATABASE,
  host: process.env.USER_HOST,
});

module.exports = connection; */

// Promises